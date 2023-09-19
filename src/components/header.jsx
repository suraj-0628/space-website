
import logo from "../assets/shared/logo.svg"
import { A, Route, Routes } from "@solidjs/router"
import { createSignal } from "solid-js"




export default function Header(){
    const [pos,setPos]=createSignal("left-0")
    return(
        <div>
        <header className="p-12">
         <div ><img src={logo} alt="logo" /></div>
         <div className="border-b-2 500 w-[40%] absolute left-[10%] top-[10%]"></div>
     
         <nav className="text-white bg-black h-20 w-[50%] bg-opacity-[30%] text-center absolute left-[50%] top-[5%] text-xl  flex justify-center items-center ">
     
            <div onClick={()=>setPos('left-[0%]')} 
            className="w-1/4 h-full flex justify-center items-center">
             <A href="/">00HOME</A>
            </div>
     
            <div onClick={()=>setPos('left-[25%]')} className="w-1/4 h-full flex justify-center items-center">
             <A href="/destination">01DESTINATION</A>
            </div>
     
            <div onClick={()=>setPos('left-[50%]')} className="w-1/4 h-full flex justify-center items-center">
             <A href="/crew">02CREW</A>
            </div>
     
            <div onClick={()=>setPos('left-[75%]')} className="w-1/4 h-full flex justify-center items-center">
             <A href="/technology">03TECHNOLOGY</A>
            </div>
     
            <div className={`absolute transition-[left] duration-500 ease-out bottom-0 h-1 w-[25%] bg-white ${pos()}`}>
            </div>
           </nav>
        </header> 
        </div>
        
    )
}