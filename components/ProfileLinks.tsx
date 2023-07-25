import React from 'react'
import PrayingHandSvg from '@/components/svg/PrayingHandSvg';
import { useModelStore } from '@/lib/zustand/modelStore'
import Image from 'next/image';

type Link = {
    title: string,
    link: string
}

export default function ProfileLinks() {
    const { animate, setAnimate } = useModelStore();

    const links: Link[] = [
        { title: "Mikazuki Studio", link: "https://www.mikazukistudio.com" },
        { title: "Slipstitch", link: "https://www.slipstitch.app" },
        { title: "Kazuki's World", link: "https://www.kazukisworld.com" },
    ]

    return (
        <div className='z-20 fixed inset-0 flex flex-col justify-center items-center'>

            <div className={`w-full p-4 transition-all ${animate ? 'scale-y-0 invisible' : 'scale-y-100'}`}>
                <div className="h-24 w-full bg-white rounded-[50%] flex justify-center items-center">
                    <Image className='h-24 w-24 rounded-full border border-slate-50 grayscale' src={'/profile-pic.png'} alt='Profile Picture' width={1000} height={1000} />
                </div>
            </div>

            <div className={`z-20 w-full flex justify-center items-center transition-all duration-1000 ${animate ? 'scale-0 -translate-y-12 opacity-50' : 'scale-100 translate-y-0 opacity-100'}`}>
                <PrayingHandSvg className='w-1/4 fill-white' />
                <div className={`flex flex-col justify-center items-center space-y-4 transition-all ${animate ? 'scale-x-0 w-0' : 'scale-x-100 w-2/4'}`}>
                    {
                        links.map(({ title, link }) => (
                            <button key={title} className='w-full bg-white p-4 rounded font-bold' onClick={() => animate ? setAnimate(false) : setAnimate(true)}>
                                {title}
                            </button>
                        ))
                    }
                </div>
                <PrayingHandSvg className='w-1/4 fill-white transform -scale-x-100' />
            </div>
        </div>
    )
}
