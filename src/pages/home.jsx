import Header from "../components/header";
import Homecontent from "../components/homecontent";



export default function Home(){
    return(
        <div className="overflow-hidden">
        
        <div className="bg-[url('./src/assets/home/background-home-desktop.jpg')] h-screen w-screen bg-center bg-cover ">
        <Header/>
        <Homecontent/>
        </div>
        </div>
    )
}