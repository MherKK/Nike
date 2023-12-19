import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataRef } from '../../firebase';

const SignIn = () => {

    const [userList,setUserList] = useState({});
    const [user,setUser] = useState(
        {
            email:'',
            password:''
        }
    )
    const [userData,setUserData] = useState({
        email:'email1231312313',
        password:'mheranjarkakaakakakak'
    });
    const [incorrectData, setIncorrectData] = useState(false);
    useEffect(() => {
        //fetching firebase data and putting into userList variable
        dataRef.ref('/Users').on('value', (data) => {
            setUserList(data.val())
        })
        for(let i in userList){
            if(userList[i].email == user.email){
                        setUserData(userList[i])
                return setIncorrectData('');
            }else{
                setIncorrectData('incorrectEmail')
            }
        }
    },[user.email,user.password])
  return (
    <div className='w-full mt-10 mb-0 p-0 max-sm:-mt-18 z-20  flex flex-col justify-center items-center'>
        <form className='flex  border border-black flex-col p-14 max-sm:p-4 rounded-lg  items-center  gap-8'>
           <div className='flex flex-col gap-6'>
                <label  className='text-coral-red'>
                    Email:
                    <br />
                    <input className='p-2 max-sm:w-[300px] w-80 rounded-lg mt-2 border border-black' placeholder='email@gmail.com' type='email'
                    onChange={(e) => setUser({...user,email:e.target.value})}/>
                </label>

                <label  className='text-coral-red'>
                    Password:
                    <br />
                    <input
                    onChange={(e) => setUser({...user,password:e.target.value}) }
                    className='p-2 max-sm:w-[300px] w-80 rounded-lg mt-2 border border-black' placeholder='*******' type='password'/>                
                </label>
                {incorrectData === 'incorrectEmail' ? <p className='text-coral-red font-bold text-[13px]'>email does not exist</p>:
                incorrectData === 'incorrectPassword' ? 
                <span  className=' font-montserrat'>
                    <p className='text-coral-red inline-block mr-6 font-bold text-[13px]'>Incorrect password</p>
                    <span className='text-[13px]'>Forgot Password? <Link className='underline text-coral-red'>Reset</Link></span>
                </span> :  incorrectData === 'emptyfield' ? <p className='text-[13px] font-bold font-montserrat text-coral-red'>Fill all the fields</p> : ''}

           </div>
           <button  className='text-black font-bold border w-[200px] p-2 rounded-[10px] bg-coral-red text-center hover:bg-black hover:text-coral-red'
           onClick={(e) => {
            e.preventDefault();
    
            if(user.email == userData.email && user.password == userData.password){
                document.location.href = '/'
                localStorage.setItem('userData',JSON.stringify(userData));
            }else if(user.email === '' || user.password === '') {
                return setIncorrectData('emptyfield');
            } else{
                setIncorrectData('incorrectPassword')
            }
           }}>Sign In</button>
        </form>
        
    </div>
  )
}

export default SignIn