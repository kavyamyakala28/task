import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './globals.css'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children, home }) {
  return (
    <html lang="en" >
      <body className={montserrat.className} >

        <Navbar />

        <div className='flex'>
          <Sidebar />
          {children}
          {home}

        </div>



      </body>
    </html>
  )
};