import { createSignal } from "solid-js"




export default function Destinationnav(){
    const [pos,setPos] = createSignal('left-0')
    return(
        <div >
            <nav className="text-white  h-20 w-[25%] text-center absolute left-[50%] top-[35%] text-base  flex justify-center items-center ">
                <div onClick={()=>setPos('left-[0%]')} className="w-1/4 h-full flex justify-center items-center ">MOON</div>

                <div onClick={()=>setPos('left-[25%]')} className="w-1/4 h-full flex justify-center  items-center ">MARS</div>
                 
                 
                <div onClick={()=>setPos('left-[50%]')} className="w-1/4 h-full flex justify-center items-center ">EUROPA</div>
                
                <div onClick={()=>setPos('left-[75%]')} className="w-1/4 h-full flex justify-center  items-center ">TITAN</div>

                <div className={`absolute transition-[left] duration-500 ease-out bottom-0 h-1 w-[25%] bg-white ${pos()}`}></div>

                
            </nav>
        </div>
    )
}