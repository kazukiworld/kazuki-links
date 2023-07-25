import React from 'react'
import PrayingHandSvg from '@/components/svg/PrayingHandSvg';
import { useModelStore } from '@/lib/zustand/modelStore'
import Image from 'next/image';
import ReachingHandSvg from './svg/ReachingHandSvg';
import ExitIcon from './icon/ExitIcon';
import { useNavStore } from '@/lib/zustand/navStore';

type Content = {
    title: string,
    description: string,
    image: string | null,
    link: string
}

export default function ProfileLinks() {
    const { animate, setAnimate } = useModelStore();
    const { content, setContent } = useNavStore();

    const contents: Content[] = [
        {
            title: 'Mikazuki Studio',
            description: 'A creative web development studio based in the U.S, crafting bilingual digital experiences with Storytelling and Interactivity.',
            image: '/images/mikazuki-studio-logo.png',
            link: 'https://www.mikazukistudio.com'
        },
        {
            title: 'Slipstitch',
            description: 'A sustainable online fashion marketplace to buy and sell 1-of-1 fashion items (web app currently not supported).',
            image: '/images/slipstitch-logo.png',
            link: 'https://www.slipstitch.app'
        },
        {
            title: 'Fade to Black',
            description: 'A short film documentary about how humans deal with death. Contribution: animation and storyboarding.',
            image: '/images/fade-to-black.png',
            link: 'https://www.viddsee.com/video/ftb-eliada-yap/67g1m?locale=en'
        },
        {
            title: "Kazuki's World",
            description: 'An interactive 3D world that acts as a personal portfolio for people to learn more about Kazuki.',
            image: '/images/kazukisworld.png',
            link: 'https://www.kazukisworld.com'
        },
    ]

    const handleLinkClicked = (i: number) => {
        animate ? setAnimate(false) : setAnimate(true);
        setContent(contents[i]);
    }

    return (
        <div className='z-20 fixed inset-0 flex flex-col justify-center items-center'>

            <div className={`w-full p-4 lg:max-w-3xl transition-all ${animate ? 'scale-y-0 invisible' : 'scale-y-100 delay-300 duration-700'}`}>
                <div className="h-24 w-full bg-white rounded-[50%] flex justify-center items-center">
                    <Image className='h-24 w-24 rounded-full border border-slate-50 grayscale' src={'/images/profile-pic.png'} alt='Profile Picture' width={1000} height={1000} />
                </div>
            </div>

            <div className={`z-20 w-full flex justify-center items-center transition-all duration-1000 lg:max-w-3xl ${animate ? 'scale-0 -translate-y-12 opacity-50' : 'scale-100 translate-y-0 opacity-100'}`}>
                <PrayingHandSvg className='w-1/4 fill-white' />
                <div className={`flex flex-col justify-center items-center space-y-4 transition-all ${animate ? 'scale-x-0 w-0' : 'scale-x-100 w-2/4'}`}>
                    {
                        contents.map(({ title }, i) => (
                            <button key={i} className='w-full p-4 rounded font-bold font-custom text-white' onClick={() => handleLinkClicked(i)}>
                                {title}
                            </button>
                        ))
                    }
                </div>
                <PrayingHandSvg className='w-1/4 fill-white transform -scale-x-100' />
            </div>

            <div className={`fixed inset-0 w-full h-full p-4 flex flex-col justify-center items-center space-y-2 transition-all ${animate ? 'scale-y-100 delay-700 duration-1000' : 'scale-y-0 '}`}>
                <ReachingHandSvg className='fill-white transform -scale-y-100 h-1/4' />
                <div className='bg-black/90 border border-white w-full h-full flex flex-col justify-between font-custom rounded p-4 h-2/4 space-y-4 lg:max-w-3xl'>
                    <div className='flex justify-between items-center text-white'>
                        <h1 className='font-bold'>{content?.title}</h1>
                        <ExitIcon onClick={() => { setAnimate(false) }} className='w-6 h-6 fill-white' />
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        {
                            content?.image &&
                            <Image src={content?.image} className='w-24 h-24 rounded-full object-cover grayscale' alt='Profile Picture' width={1000} height={1000} />
                        }
                        <p className='text-center w-full text-white'>{content?.description}</p>
                    </div>
                    <a href={content?.link} className='w-full bg-white p-3 font-bold text-center'>Visit Link</a>
                </div>
                <ReachingHandSvg className='fill-white transform -scale-x-100 h-1/4' />
            </div>
        </div>
    )
}
