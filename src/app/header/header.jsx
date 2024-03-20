'use client'
import Nav from "./nav/nav"
import Logo from "./logo/logo"
import Login from "./login/login"
import useStore from "./../store/store.jsx";

export default function Header (){
  const headTop=useStore((state)=>state.headTop)
// console.log(headTop);
    return(
        <header dir="rtl" style={{top:headTop}} className="w-[100%] h-[9vh] relative shadow-md flex justify-center">
            <section className="2xl:container w-[100%] border h-[100%] flex">
            <Logo/>
            <Nav/>
            <Login/>
            </section>
        </header>
    )
}