const Footer =() => {
    return (
        <footer className=" w-full">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-xl font-semibold  uppercase ">UiFry</h2>
            <ul className="  font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline font-medium">Help@Frybix.Com</a>
                </li>
                <li className="mb-4">
                    <a href="#" className=" hover:underline font-medium">+1234 456 678 89</a>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-semibold uppercase">Links</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Home</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-medium">About Us</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-medium">Bookings Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-medium">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-semibold uppercase ">Product</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline font-medium">Take Tour</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-medium">Live Chat</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline font-medium">Reveiws</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-semibold uppercase">NewsLetter</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline font-medium">Stay Up To Date</a>
                </li>
            </ul>
        </div>
    </div>
    <hr/>
    <div className="flex justify-center items-center pt-4 font-medium">Copyright 2022 Uifry.Com All Rights are Reserved</div>
    </div>
</footer>
    )
}
export default Footer;