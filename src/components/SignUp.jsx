import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dataRef } from '../../firebase'

const SignUp = () => {

    const [user,setUser] = useState(
        {
        name:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const [emptyField, setEmptyField] = useState(false);
    const [passwordMatch,setPasswordMatch] = useState(true);
    const [usedEmail,setUsedEmail] = useState(false);
    const [userList,setUserList] = useState({});

//if everything is correct without any errors then this function will push the input data into firebase
    function signUpSubmitHandler(){
       if((user.name && user.lastName && user.email && user.password && user.confirmPassword) !== '' && emptyField === false && usedEmail === false && passwordMatch === true){
                setUser({...user})
                let id = +Object.keys(userList).length + 1
                dataRef.ref('/Users' + '/' + id).set({
                    name:user.name,
                    lastName: user.lastName,
                    email:user.email,
                    password:user.password
                })
                
                alert("Sign Up has been successful")
                document.location.href = '/'
            }
        if((user.name && user.lastName && user.email && user.password && user.confirmPassword) !== ''){
            setEmptyField(false)
        }else{
            setEmptyField(true)
        }
    }
    
//this function checks if the password and the confirmed password matches or not
    function passwordChecker(password,confirmedPassword){
        if(password !== confirmedPassword){
            setPasswordMatch(false)
        }else{
            setPasswordMatch(true)
        }
    }
// this function checks if the email is already used or not
    function emailChecker(email){
        for(let i in userList){
            if(userList[i].email == email){
                return setUsedEmail(true);
            }else{
                setUsedEmail(false)
            }
        }
    }
    useEffect(() => {
        //fetching firebase data and putting into userList variable
        dataRef.ref('/Users').on('value', (data) => {
            setUserList(data.val())
        })
    },[])

  return (
    <div className='w-full mt-10 mb-0 p-0 max-sm:-mt-18 z-20  flex flex-col justify-center items-center'>
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
                    <input value={user.lastName} onChange={(e) => setUser({...user,lastName:e.target.value})} required className='p-2 max-sm:w-[300px] w-80 border border-black rounded-lg mt-2'  type='text' placeholder='Last Name'/>
                </label>  

                <label className='text-coral-red'>
                    Email:
                    <br />
                    <input value={user.email} onChange={(e) => {
                        emailChecker(e.target.value)
                        
                        setUser({...user,email:e.target.value})
                    }} required className='p-2 max-sm:w-[300px] border border-black w-80 rounded-lg mt-2' placeholder='Write a valid email' type='text'/>
                    {usedEmail === true && <p className='text-coral-red font-bold text-[13px]'>Email has been already used</p>}
                </label>

                <label className='text-coral-red'>
                    Password:
                    <br />
                    <input value={user.password} onChange={(e) => {
                        passwordChecker(e.target.value,user.confirmPassword)
                        setUser({...user,password:e.target.value})
                    }} required className='p-2 max-sm:w-[300px] border border-black w-80 rounded-lg mt-2' placeholder='******' type='password'/>
                </label>

                <label className='text-coral-red'>
                    Confirm Password:
                    <br />
                    <input value={user.confirmPassword} onChange={(e) => {
                        passwordChecker(user.password,e.target.value)
                        setUser({...user,confirmPassword:e.target.value})
                    }} required className='p-2 max-sm:w-[300px] border border-black w-80 rounded-lg mt-2' placeholder='******' type='password'/>
                {passwordMatch === false && <p className='text-coral-red font-bold text-[13px]'>Password does not match</p>}
                </label>

            
                {emptyField === true && <p className='text-coral-red font-bold'>Please fill all the fields</p>}
            </div>
           
            <Link to={user.destination}
            onClick={() => {
                signUpSubmitHandler()   
            }} 
            className='text-black font-bold border w-[200px] p-2 rounded-[10px] bg-coral-red text-center hover:bg-black hover:text-coral-red'>Submit</Link >    

        </form>
        <p className='p-10 pb-0 text-center md:w-[500px] font-montserrat'><span className='underline underline-offset-4 text-coral-red'>By Signing Up</span>, you will receive email about your orders and the receipt for those orders. So make sure to put a <span className='underline underline-offset-4 text-coral-red'>valid email.</span></p>    
        
    </div>
  )
}

export default SignUp