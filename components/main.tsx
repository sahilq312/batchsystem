import Image1 from "@/public/assets/iPhone-13-Pro-Front.png"
import Image2 from "@/public/assets/iPhone-13-Pro-Front (1).png"
import Image3 from "@/public/assets/iPhone-13-Pro-Front (2).png"
import Image from "next/image";
import Background from "@/public/assets/Group 35887.png"
import Arrow from "./Icons/arrow";
import Watch from "./Icons/play";
import Achivement from "./Icons/achivement";


const Main = () => {
    return (
        <div className="relative grid grid-flow-row w-full sm:grid-flow-col ">
        <div className="flex flex-col gap-6  lg:pt-32 lg:pl-48 ">
            <h1 className=" font-bold text-5xl lg:text-8xl">
                Make The Best <br/>
                Financial Desisions
            </h1>
            <p className="text-xl tracking-wider font-semibold text-[#818081]">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br/> 
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className="flex items-center justify-start gap-10 pl-6 font-semibold text-lg">
                <div className="text-white bg-black p-6 rounded-md w-52 flex items-center gap-4">
                Get Started
                <Arrow/>
                </div>
                <div className="flex gap-4">
                    <Watch/>
                    Watch Video
                </div>
            </div>
            <div className="hidden lg:block">
                <Achivement/>
            </div>
        </div>
        <div className="h-96">
        <Image
        className="absolute right-2 lg:top-14" src={Background} width={850} height={700} alt="image" />
        <Image className="absolute lg:right-4 lg:top-52" quality={100} src={Image1} width={720} height={720} alt="image"/>
        <Image className="absolute lg:right-24 lg:top-36" quality={100} src={Image2} width={720} height={720} alt="image"/>
        <Image className="absolute lg:right-48 lg:top-16" quality={100} src={Image1} width={720} height={720} alt="image"/>
        </div>
        </div>
    )
}

export default Main;