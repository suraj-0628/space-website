import Header from "../components/header";




export default function Crew(){
    return(
        <div className="bg-[url('./src/assets/crew/background-crew-desktop.jpg')] h-screen w-screen  bg-no-repeat bg-cover ">
        <Header/>

        <div className="text-white text-2xl pl-[15%] pt-[5%]">
            <h1><span className="pr-[2%] text-[rgb(195,194,181)]">02</span>MEET YOUR CREW</h1>
        </div>
        </div>
    )
}