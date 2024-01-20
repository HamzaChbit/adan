'use client'

import { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [qiblaData, setQiblaData] = useState(null);

  useEffect(() => {
    const fetchQiblaData = async () => {
      try {
        const latitude = 25.4106386;
        const longitude = -54.189238;
        const response = await fetch(`/api/qibla?latitude=${latitude}&longitude=${longitude}`);

        if (!response.ok) {
          throw new Error('Failed to fetch Qibla direction');
        }

        const data = await response.json();
        setQiblaData(data.data);
      } catch (error) {
        console.error('Error fetching Qibla direction:', error.message);
      }
    };

    fetchQiblaData();
  }, []);

  return (
    <div>
      <h1>Your Main Component</h1>
      {qiblaData && (
        <p>
          Qibla Direction: {qiblaData.direction} degrees at {qiblaData.latitude}, {qiblaData.longitude}
        </p>
      )}
    </div>
  );
};

export default ExampleComponent;
