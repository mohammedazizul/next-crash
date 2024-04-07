// server component
import Button from '@/app/Components/Button';
import React from 'react';
import Image from 'next/image';
import thumb from "@/public/images/thumb.jpg"

export default function Mission() {
    return (
        <main className='mt-10'>

            <div className='p-5'>Mission page</div>

            <div className='flex'>
                <div style={{color:"red", fontSize: "32px"}}>Abdu</div>
                <div style={{color:"blue", fontSize: "32px"}}>llah</div>
            </div>


            <h1 style={{color:"red"}}>Abdullah</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quas eaque non doloribus natus sit ratione sed optio reprehenderit blanditiis ex ea nostrum adipisci culpa inventore alias cupiditate, cum facere.</p>

            <div className='w-[150px]'>
                <Image src={thumb} alt='Thumb image' placeholder='blur'/>
            </div>
            

            <Button />

        </main>
    );
};
