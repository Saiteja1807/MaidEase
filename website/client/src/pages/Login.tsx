import React from 'react'
import Image from 'next/image'
import AuthImg from '../../public/images/Login.jpeg'
import router, { useRouter } from 'next/router'


function Login() {

    const router = useRouter();
    const onLogin = () =>  {
        console.log('Free pizza!');
        console.log('connecttion successful');
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <Image
             className='object-cover h-screen w-full'
             src={AuthImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'><a href = "/">MaidEase</a></h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" />
                </div>
                <div className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-center' > 
                <a onClick={() => router.push("./DevelopmentInProgress")}>  
                    Sign In</a>
                    </ div>
                <div className='flex justify-between'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p className='text-indigo-600 hover:text-indigo-500'>Forgot Password?</p>
                </div>
                <div className='flex justify-center py-4'>
                    <p className='text-gray-500'>Don't have an account?</p>
                    <div className='text-indigo-600 hover:text-indigo-500 ml-2'>
                        <a href='./Registration'>
                        Sign Up</a></div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login