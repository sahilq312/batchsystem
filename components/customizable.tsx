import BackgroundImage from "@/public/assets/Group 35887.png";
import PhoneBackground from "@/public/assets/Silver.png";
import Image1 from "@/public/assets/iPhone-13-Pro-Front.png";

import ProductImage1 from "@/public/assets/iPhone-13-Pro-Front (3).png";

import Image from "next/image";
import Icon1 from "./Icons/Icon1";
import Icon2 from "./Icons/Icon2";
import Icon3 from "./Icons/Icon3";
import CleverIcon from "./Icons/cleverIcon";

const Customizable = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full tracking-wider  justify-evenly items-center max-w-screen gap-10 lg:gap-0 ">
      <div className="relative ">
        <Image
          className=" lg:left-16"
          src={BackgroundImage}
          width={700}
          height={700}
          alt="image"
        />
        <Image
          className="absolute top-0 left-6 lg:top-12 lg:left-48 "
          src={ProductImage1}
          width={500}
          height={450}
          alt="image"
        />
      </div>
      <div className=" lg:w-1/2 flex flex-col justify-evenly gap-6">
        <p className="text-3xl font-bold pl-12 leading-10 flex items-center">
          <CleverIcon />
          Clever Notifications
        </p>
        <div className="flex flex-col gap-10 ">
          <p className="font-semibold text-slate-700">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            <br /> ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            <br /> tristique lacus, et blandit viverra nisl velit. Sed mattis
            <br /> rhoncus, diam suspendisse sit nunc, gravida eu. Lectus ege
            <br />t eget ac dolor neque lorem sapien, suspendisse aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Customizable;
