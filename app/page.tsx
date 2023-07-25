'use client'

import ModelViewer from '@/components/3DViewers/ModelViewer'
import ProfileLinks from '@/components/ProfileLinks';
import Image from 'next/image';
import React from 'react'



export default function Home() {

  return (
    <div className='w-full h-screen'>
      <ModelViewer />
      <Image className='z-10 fixed inset-0 w-full h-screen opacity-10' src={'/grainy-overlay.gif'} alt='Grainy GIF' width={1000} height={1000} />
      <ProfileLinks/>
    </div>
  )
}
