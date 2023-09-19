
import Destinationnav from "../components/destination/destinationnav"
import Header from "../components/header"

export default function Destination(){
   
    
    return(
        <div className="bg-[url('./src/assets/destination/background-destination-desktop.jpg')] h-screen w-screen  bg-no-repeat bg-cover ">
        <Header/>
        <Destinationnav/>

        <div className="text-white text-2xl pl-[15%] pt-24">
            <h1><span className="pr-[2%] text-[rgb(195,194,181)]">01</span>PICK YOUR DESTINATION</h1>
        </div>


        </div>
    )
}