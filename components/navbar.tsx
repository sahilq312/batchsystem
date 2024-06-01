const Navbar = () => {
  return (
    
    <div className=" z-10 backdrop-blur-sm p-4 lg:p-0 fixed grid grid-flow-col justify-between w-full lg:w-3/5 text-md lg:text-xl font-medium items-center">
      <div className="flex gap-5">
        <p
          className=" width-[60px] h-[26px] opacity-[0px] text-[#FF5555] font-bold">
          Home
        </p>
        <p>About</p>
        <p>Pricing</p>
        <p>Features</p>
      </div>
      <div
      className="bg-black rounded-md text-white p-4 lg:p-6">Download</div>
    </div>
  );
};
export default Navbar;
