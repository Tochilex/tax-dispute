import Login from '@/components/Login'

import { getServerSession } from 'next-auth';
import { redirect } from "next/navigation";
import { authOptions } from '../api/auth/[...nextauth]/route';


import React from 'react'


const LoginPage = async() => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (

    <div className='text-white bg-[#121212] pt-[2rem] sm:pt-[4rem]'>
      
        <Login />
    </div>
  

    
  )


}

export default LoginPage