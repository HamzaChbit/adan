import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' أوقات الصلاة بالمغرب',
  description: ' أوقات الصلاة في المغرب بدقة ويسر، حيث يقدم الموقع جداول شاملة لصلوات اليوم في جميع المدن والمناطق. احصل على معلومات دقيقة لأوقات الفجر، الظهر، العصر، المغرب والعشاء. توفير لك تجربة موثوقة لتنظيم وأداء صلواتك في الأوقات المناسبة، وذلك من خلال موقع يسهل الوصول إليه وفهمه',
  icons:{
    icon:['/favicon.ico?v=1'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']

  },
  keywords:["أوقات الصلاة ","المغرب", "جداول الصلوات", "صلاة الفجر","صلاة الظهر","صلاة العصر","صلاة المغرب","صلاة العشاء","مواقيت الصلاة","موقع أذان","توقيت صلاة الفجر","توقيت صلاة الظهر ","توقيت صلاة العصر","توقيت صلاة المغرب","توقيت صلاة العشاء"],
  creator:"Hamza Chbit",
  authors:[{name:"Hamza Chbit"}],
  publisher:"Hamza chbit",
  manifest:'/site.webmanifest'

}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
    
      <body className={inter.className && "bg-black "} >
        {children}
      
      
      </body>
    </html>
  )
}
