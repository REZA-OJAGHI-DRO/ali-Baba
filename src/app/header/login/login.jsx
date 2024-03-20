'use client'
import Link from 'next/link'
export default function Login (){
    return(
        <div className="w-[35%] h-[100%]">
            <Ul/>
        </div>
    )
}

function Ul(){
    return(
        <ul className="w-[100%] h-[100%] flex text-[1rem] text-zinc-600">
            <li className="w-[30%] h-[100%] flex justify-center items-center gap-1">
            <i class="bi bi-question-circle"></i>
                <Link href=''>
                    مرکز پشتیبانی آنلاین
                </Link>
            </li>
            <li className="w-[30%] h-[100%] flex justify-center items-center gap-1">
            <i class="bi bi-suitcase"></i>
                <Link href=''>
                    سفرهای من
                </Link>
            </li>
            <li className="w-[30%] h-[100%] flex justify-center items-center gap-1">
            <i class="bi bi-person"></i>
                <Link href=''>
                    ورود یا ثبت نام
                </Link>
            </li>
        </ul>
    )
}