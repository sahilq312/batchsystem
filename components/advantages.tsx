import Icon1 from "./Icons/Icon1";
import Icon2 from "./Icons/Icon2";
import Icon3 from "./Icons/Icon3";
import BackgroundImage from "@/public/assets/Group 35887.png";
import PhoneBackground from "@/public/assets/Silver.png";
import Image1 from "@/public/assets/iPhone-13-Pro-Front.png";
import Image from "next/image";
import ProductImage1 from "@/public/assets/iPhone-13-Pro-Front (7).png";
import CleverIcon from "./Icons/cleverIcon";

const Advantages = () => {
  return (
    <div className="flex relative flex-col  lg:flex-row w-full tracking-wider  justify-evenly items-center max-w-screen gap-10 lg:gap-0  sm:text-center ">
      <div className=" lg:w-1/2 flex flex-col justify-center items-left text-left lg:pl-40">
          <p className=" pl-32 font-medium tracking-wider text-4xl font-mono text-red-500">Advantages</p>
          <h1 className=" text-7xl font-extrabold leading-normal">Why Choose Urifry ?</h1>
          <p className="text-2xl font-bold pl-12 leading-10 flex items-center"><CleverIcon/>Clever Notifications</p>
          <p className="font-semibold text-slate-700">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            <br /> ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            <br /> tristique lacus, et blandit viverra nisl velit. Sed mattis
            <br /> rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
            <br /> eget ac dolor neque lorem sapien, suspendisse aliquam.
          </p>
        </div>
      <div className="w-1/2 relative">
        <Image
          src={ProductImage1}
          width={500}
          height={500}
          className="absolute lg:top-4 lg:right-64"
          alt="image"
        />
        <Image src={BackgroundImage} className=" " alt="image" />
      </div>
    </div>
  );
};
export default Advantages;
