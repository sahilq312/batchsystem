import BackgroundImage from "@/public/assets/Group 35887.png";
import PhoneBackground from "@/public/assets/Silver.png";
import Image1 from "@/public/assets/iPhone-13-Pro-Front.png";
import Image from "next/image";
import ProductImage1 from "@/public/assets/iPhone-13-Pro-Front (3).png";
import Icon1 from "./Icons/Icon1";
import Icon2 from "./Icons/Icon2";
import Icon3 from "./Icons/Icon3";

const Features = () => {
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
      <div className=" lg:w-1/2 flex flex-col justify-evenly">
        <p className=" pl-12 text-left font-medium tracking-wider text-4xl font-mono  text-red-500">
          Features
        </p>
        <h1 className="pl-6 text-7xl font-extrabold leading-normal">
          Uifry Premium
        </h1>
        <div className="flex flex-col gap-10 ">
          <section>
            <p className="text-lg font-bold pl-12 leading-10 flex items-center">
              <Icon1 />
              Budegeting Interval
            </p>
            <p className="font-semibold text-slate-700">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </section>
          <section>
            <p className="text-lg font-bold pl-12 leading-10 flex items-center">
              <Icon2 />
              Budegeting Interval
            </p>
            <p className="font-semibold text-slate-700">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </section>
          <section>
            <p className="text-lg font-bold pl-12 leading-10 flex items-center">
              <Icon3 />
              Budegeting Interval
            </p>
            <p className="font-semibold">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Features;
