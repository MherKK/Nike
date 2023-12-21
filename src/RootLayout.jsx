import { Nav } from './components'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
 let userData = JSON.parse(localStorage.getItem('userData'))
  return (
    <div>
        <Nav/>
        
        {userData == 'empty' || undefined ? <p className='underline underline-offset-4 text-slate-gray font-montserrat border-coral-red pt-[100px] text-center text-sm p-2'>{'Save your favorite items by '}  
          <Link to='/signin' className='text-coral-red underline '> Sign In</Link> {'/ '}  
          <Link to='/signup' className='text-coral-red underline'>Sign Up</Link>
        </p> : 
        <div className='underline underline-offset-4 text-slate-gray font-montserrat border-coral-red pt-[100px] text-center text-sm p-2'>
          {'Welcome to Nike Store ' + userData?.name.slice(0,1).toUpperCase() + userData?.name.slice(1,userData?.name.length) + ' ,'} 
          <button onClick={() => {
            document.location.reload();
            localStorage.setItem('userData',JSON.stringify('empty'))
        }} className='text-coral-red underline '>Sign Out</button>  
        </div>}
        <Outlet />
         
    </div>

  )
}

export default RootLayout