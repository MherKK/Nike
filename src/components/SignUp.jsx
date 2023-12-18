import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataRef } from '../../firebase'

const SignUp = () => {
    
    const [user,setUser] = useState(
        {
        name:'',
        lastName:'',
        email:'',
        message:'',
        destination:''
    })

    const [userList,setUserList] = useState([]);

    function signUpSubmitHandler(){
      
       if(user.name && user.lastName && user.email !== '' && user.message !=='used' && user.message !== 'error'){
                setUser({...user,message:'success',destination:'/'})
                dataRef.ref('/Users' + '/'+ user.name + user.lastName).set({
                    name:user.name,
                    lastName: user.lastName,
                    email:user.email
                })
                alert("SignUp has been successful")
                
            }else{
                setUser({...user,message:'error'})
            }
       
    }

    useEffect(() => {
        if(user.name && user.lastName && user.email !== ''){
            setUser({...user,destination:'/'})
        }
        for(let i in userList){
            if(userList[i].email === user.email){
                setUser({...user,destination:'' ,message:'used'})
            }
        }
        dataRef.ref('/Users').on('value', (data) => {
            setUserList(data.val())
        })
    },[user.name,user.email,user.lastName])
  return (
    <div className='md:absolute md:top-0 w-full max-sm:-mt-16 z-20 flex flex-col justify-center items-center min-h-screen '>
        <form  className='flex  border border-black flex-col p-14 max-sm:p-4 rounded-lg  items-center  gap-8'>
            <div className='flex flex-col gap-6'>
            <p className='text-coral-red font-bold'>All fields are required*</p>
            <label className='text-coral-red'>
                First Name:
                <br />
                <input value={user.name} onChange={(e) => setUser({...user,name:e.target.value})} required className='p-2 max-sm:w-[300px] w-80 rounded-lg mt-2 border border-black'  type='text' placeholder='First Name'/>
            </label >  
            <label className='text-coral-red'>
                Last Name:
                <br />
                <input value={} onChange={(e) => setUser({...user,lastName:e.target.value})} required className='p-2 max-sm:w-[300px] w-80 border border-black rounded-lg mt-2'  type='text' placeholder='Last Name'/>
            </label>  
            <label className='text-coral-red'>
                Email:
                <br />
                <input onChange={(e) => setUser({...user,email:e.target.value})} required className='p-2 max-sm:w-[300px] border border-black w-80 rounded-lg mt-2' placeholder='Email@gmail.com' type='text'/>
                {user.message === 'used' && <p className='text-coral-red font-bold text-[13px]'>Email has been already used</p>}
            </label>
            {user.message === 'error' && <p className='text-coral-red font-bold'>Please fill all the fields</p>}
            
            {user.message === 'success' && <p className=' text-green-700'>SignUp has been successfuly</p>}
            </div>
           
            <Link to={user.destination}
            onClick={() => {
                signUpSubmitHandler()
               
                
            }} 
            className='text-black font-bold border w-[200px] p-2 rounded-[10px] bg-coral-red text-center'>Submit</Link >    
            
        </form>
    </div>
  )
}

export default SignUp