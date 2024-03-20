'use client'
import Link from "next/link";


export default function Nav (){
    return(
        <nav className="w-[50%] h-[100%]">
            <Ul/>
        </nav>
    )
}

function Ul(){

    return(
        <ul className="w-[70%] h-[100%] flex justify-around items-center text-[1.1rem] text-zinc-600">
        <li className="w-[20%] h-[100%]  px-1 relative group flex justify-center items-center">
            <button className=" transition-all duration-300 w-[100%] h-[50%] hover:bg-zinc-200 rounded-md flex justify-center items-center gap-3">
            بلیط
            <i className="bi bi-chevron-down"></i>
            </button>
            <ul className="group-hover:flex hidden w-[130%] absolute top-[100%] right-0 rounded-md border justify-center content-center flex-wrap shadow-lg">
                <li className="w-[80%] h-[7vh]  p-1">
                    <button onClick={()=>stay(event)} data-click='off' className="w-[100%] h-[100%] flex justify-start items-center text-[1.1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        پرواز داخلی
                    </button>
                </li>
                <li className="w-[80%] h-[7vh] border-y-2 p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        پرواز خارجی
                    </button>
                </li>
                <li className="w-[80%] h-[7vh]  p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        قطار
                    </button>
                </li>
                <li className="w-[80%] h-[7vh] border-t-2 p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        اتوبوس
                    </button>
                </li>
            </ul>
        </li>

        <li className="group w-[20%] h-[100%] border-x border-zinc-300 px-1 relative flex justify-center items-center">
        <button className="w-[100%] h-[50%] hover:bg-zinc-200 rounded-md flex justify-center items-center gap-3">
            اقامت
            <i className="bi bi-chevron-down"></i>
            </button>
            <ul className="group-hover:flex hidden w-[130%] absolute top-[100%] right-0 rounded-md border justify-center content-center flex-wrap shadow-lg">
                <li className="w-[80%] h-[7vh]  p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        هتل
                    </button>
                </li>
                <li className="w-[80%] h-[7vh] border-t-2 p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                     ویلا و اقامتگاه
                    </button>
                </li>
            </ul>
        </li>

        <li className="w-[20%] h-[100%] px-1">
        <button className=" transition-all duration-300 w-[100%] h-[100%] flex justify-center items-center gap-3 hover:bg-zinc-200 rounded-md">
            تور
            </button>
        </li>
        <li className="w-[20%] h-[100%] border-x border-zinc-300 px-1">
            <Link href=''  className=" transition-all duration-300 w-[100%] h-[100%] flex justify-center items-center gap-3 hover:bg-zinc-200 rounded-md">
            ویزا
            </Link>
        </li>
        <li className="group flex justify-center items-center relative w-[20%] h-[100%] px-1">
        <button className=" transition-all duration-300 w-[100%] h-[50%] flex justify-center items-center gap-3 hover:bg-zinc-200 rounded-md">
            بیشتر
            <i className="bi bi-chevron-down"></i>
            </button>

            <ul className="group-hover:flex hidden w-[130%] absolute top-[100%] right-0 rounded-md border justify-center content-center flex-wrap shadow-lg">
                <li className="w-[80%] h-[7vh]  p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        علی بابا پلاس
                    </button>
                </li>
                <li className="w-[80%] h-[7vh] border-y-2 p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        مجله علی بابا
                    </button>
                </li>
                <li className="w-[80%] h-[7vh]  p-1">
                    <button className="w-[100%] h-[100%] flex justify-start items-center text-[1rem] text-zinc-500 hover:bg-zinc-200 rounded-md px-1 transition-all duration-300">
                        بیمه مسافرتی
                    </button>
                </li>
            </ul>
        </li>
    </ul>
)
}