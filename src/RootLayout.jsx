import { Nav } from './components'
import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {

  return (
    <div>
        <Nav/>
        <p className='underline underline-offset-4 text-slate-gray font-montserrat border-coral-red pt-[100px] text-center text-sm p-2'>{'Save your favorite items by '}  
          <Link to='/signin' className='text-coral-red underline '> Sign In</Link> {'/ '}  
          <Link to='/signup' className='text-coral-red underline'>Sign Up</Link>
        </p>
        <Outlet />
        
    </div>

  )
}

export default RootLayout