'use client'

import Image from "next/image";


export default function Logo (){
    return(
        <div className="w-[15%] h-[100%]">
            <figure className="w-[100%] h-[100%] flex justify-end items-center">
                <Image
                    src="/logo.svg"
                    alt="Picture of the author"
                    width="300000"
                    height="400000"
                    style={{
                      width: "9rem",
                      height: "3rem",
                      objectFit: "cover",
                     
                    }}
                />
            </figure>
        </div>
    )
}