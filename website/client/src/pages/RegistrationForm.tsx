import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Modal from 'react-modal';
import router, { useRouter } from 'next/router'
import { on } from 'events'
const RegistrationForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const [payload, setPayload] = useState({
    userEmail: '',
    pin: '',
  });

  return (
    <section className='h-full py-4 gradient-form bg-gray-200 py-0'>
      <div className='container py-0 pl-64 h-full'>
        <div className=' flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className=''>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='px-4 md:px-0'>
                  <div className='md:p-12 md:mx-6'>
                    <div className='text-center'>
                    </div>
                    <form>
                      <p className='mb-4'>
                        Please Sign Up if you don't have an account
                      </p>
                      <div className='mb-4'>
                      <input
                          type='Name'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Full Name'
                          name='userName'
                        />
                      </div>
                      <div className='mb-4'>
                      <input
                          type='email'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Email Address'
                          name='userEmail'
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Password'
                          name='password'
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Confirm Password'
                          name='cPassword'
                        />
                      </div>
                      <div>
                      <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'
                          type='button'
                        onClick={() => setIsOpen(true)}>Sign up</button>
                        <Modal 
                        isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                            <h1>Modal Content</h1>
                            <button className='border w-200 my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'
                            type='button'
                            onClick={() => router.push("./Login")}>Login</button>
                        </Modal>
                      </div>
                      <div className='flex items-center justify-between pb-6'>
                        <p className='mb-0 mr-2'>Do you have an account?</p>
                        <button
                          type='button'
                          className='inline-block px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                        >
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;