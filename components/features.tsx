import BackgroundImage from "@/public/assets/Group 35887.png"
//import PhoneBackground from "@/public/assets/Silver.png"
import Image1 from "@/public/assets/iPhone-13-Pro-Front.png"
import Image from "next/image"

const Features = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full border justify-evenly items-center">
        <div className="relative sm:h-90">
            <Image className=" left-16" src={BackgroundImage} width={700} height={700} alt="image"/>
            <Image className="absolute top-12 rotate-12 left-32 " src={Image1} width={600} height={600} alt="image"/>
        </div>
        <div>
            <p>Features</p>
            <h1>Uifry</h1>
            <section>
                <p>Budegeting Interval</p>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/>
                 faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </section>
        </div>
        </div>
        
        
    )
}
export default Features