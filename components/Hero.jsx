'use client'
import React, { useEffect, useState } from 'react';
import moment from "moment";
import Cart from './Cart';
import SearchManufacturer from './SearchManufacturer.jsx';
import { motion } from 'framer-motion'
import 'moment/locale/ar-ma';
moment.locale("ar-ma");


const Hero = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [ipAdhan, setIpAdhan] = useState('');
  const [geoInfo, setGeoInfo] = useState({});
  const [today, setToday] = useState("");
  const [selected, setSelected] = useState(null);
  const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
  const [remainingTime, setRemainingTime] = useState("");

  



  useEffect(() => {
    const getVisitorIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
        fetchIPInfo(data.ip); // Call fetchIPInfo after obtaining the IP address
      } catch (error) {
        console.error('Failed to fetch IP:', error);
      }
    };

    const fetchIPInfo = async (ip) => {
      try {
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();
        setGeoInfo(data);
      } catch (error) {
        console.error('Failed to fetch IP info:', error);
      }
    };

    getVisitorIP();

 






  }, []);
  const prayersArray = [
		{ key: "Fajr", displayName: "الفجر" },
		{ key: "Dhuhr", displayName: "الظهر" },
		{ key: "Asr", displayName: "العصر" },
		{ key: "Sunset", displayName: "المغرب" },
		{ key: "Isha", displayName: "العشاء" },
	];

  const fetchAdhan = async () => {
    try {
      if (selected && selected.name) {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?country=${geoInfo.country}&city=${selected.name}`);
        const data = await response.json();
        setIpAdhan(data);
      } else {
        // Fetch adhan based on IP info when no city is selected
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?country=${geoInfo.country}&city=${geoInfo.city}`);
        const data = await response.json();
        setIpAdhan(data);
      }
    } catch (error) {
      console.error('Failed to fetch prayer timings:', error);
    }
  };

  useEffect(() => {
    fetchAdhan();
  }, [selected, geoInfo]);


  useEffect(() => {
		let interval = setInterval(() => {
	
			setupCountdownTimer();
		}, 1000);

		const t = moment();
		setToday(t.format("MMM Do YYYY | h:mm"));

		return () => {
			clearInterval(interval);
		};
	}, [ipAdhan.data?.timings]);

  const setupCountdownTimer = () => {
		const momentNow = moment();

		let prayerIndex = 2;

		if (
			momentNow.isAfter(moment(ipAdhan.data?.timings?.Fajr, "hh:mm")) &&
			momentNow.isBefore(moment(ipAdhan.data?.timings?.Dhuhr, "hh:mm"))
		) {
			prayerIndex = 1;
		} else if (
			momentNow.isAfter(moment(ipAdhan.data?.timings?.Dhuhr, "hh:mm")) &&
			momentNow.isBefore(moment(ipAdhan.data?.timings?.Asr, "hh:mm"))
		) {
			prayerIndex = 2;
		} else if (
			momentNow.isAfter(moment(ipAdhan.data?.timings?.Asr, "hh:mm")) &&
			momentNow.isBefore(moment(ipAdhan.data?.timings?.Maghrib, "hh:mm"))
		) {
			prayerIndex = 3;
		} else if (
			momentNow.isAfter(moment(ipAdhan.data?.timings?.Maghrib, "hh:mm")) &&
			momentNow.isBefore(moment(ipAdhan.data?.timings?.Isha, "hh:mm"))
		) {
			prayerIndex = 4;
		} else {
			prayerIndex = 0;
		}

		setNextPrayerIndex(prayerIndex);

    const nextPrayerObject = prayersArray[prayerIndex]
    const nextPrayerTime = ipAdhan.data?.timings[nextPrayerObject.key]
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");
    let remainingTime = moment(nextPrayerTime,"hh:mm").diff(momentNow)
 
 

    if (remainingTime < 0) {
			const midnightDiff = moment("23:59:59", "hh:mm:ss").diff(momentNow);
			const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
				moment("00:00:00", "hh:mm:ss")
			);

			const totalDiffernce = midnightDiff + fajrToMidnightDiff;

			remainingTime = totalDiffernce;
		}
      
    const durationRemainingTime = moment.duration(remainingTime);

		setRemainingTime(
			`${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}h`
		);
  
  }




const updateTime = () => {
 const t = moment();
		setToday(t.format('LLLL'));
   
}

setInterval(updateTime,1000)
 
  

  
 
  return (
    <div className='w-auto  h-full lg:h-screen  '>
        <motion.div     initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,delay:0.4}} className='  w-full flex flex-row py-5  items-center justify-center ' >

<SearchManufacturer selected={selected} setSelected={setSelected} />

</motion.div>


      <header className=" ">
  <motion.div       initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3,delay:0.4}}  className="mx-auto  w-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-start">
      <h1 className="text-xl text-white sm:text-3xl">
{today}
</h1>
        <h1 className="text-xl  text-white sm:text-3xl"> {ipAdhan.data?.date?.hijri?.day} {ipAdhan.data?.date?.hijri?.month?.ar} {ipAdhan.data?.date?.hijri?.year}</h1>    
 

       
        <h1 className="mt-1.5 md:text-3xl text-xl  font-bold text-white">  {selected?.name || geoInfo.city }  </h1>
      </div>

      <div className="text-center sm:text-start">
        <h1 className="text-xl  text-white sm:text-3xl">  متبقي حتى صلاة   {prayersArray[nextPrayerIndex].displayName} </h1>

        <h1 className="mt-1.5 md:text-3xl text-xl   font-bold text-white">{remainingTime}</h1>
      </div>





    
    </div>
  </motion.div>







</header>

     <motion.div       initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.7,delay:0.8}} className="grid grid-cols-1   gap-4  mx-5  lg:grid-cols-5 lg:gap-8  my-12  px-15">
   <Cart image="/image/fajr.png" 
    name=' صلاة الفجر ' 
     time={ ipAdhan.data?.timings?.Fajr} />

   <Cart image="/image/dhuhr.jpg"
     name=' صلاة الظهر' 
      time={ ipAdhan.data?.timings?.Dhuhr}  />


   <Cart image="/image/asar.jpg"
     name=' صلاة العصر' 
      time={ ipAdhan.data?.timings?.Asr}  />


   <Cart image="/image/maghrib.jpg"
     name=' صلاة المغرب'
       time={ ipAdhan.data?.timings?.Maghrib}  />


   <Cart image="/image/isha.jpg" 
    name=' صلاة العشاء'  
     time={ ipAdhan.data?.timings?.Isha}  />
</motion.div>









    </div>
  );
};

export default Hero;
