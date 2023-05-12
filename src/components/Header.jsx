import { useState, useEffect } from "react";
import { nav } from "../data";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md"
// import MobileNav from "../components/MobileNav";
import Nav from "./Nav";

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { logo, signupText, loginText } = nav;

    //scroll event
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <header className="my-4">
            
            <div className="container mx-auto flex justify-between items-center">
               <div className="flex items-center">
                <a href="#"
                    data-aos='fade-down'
                    data-aos-delay='1200'
                >
                    <img src={logo} alt="" />
                </a>
                <div className="hidden lg:flex px-10" 
                    data-aos='fade-down'
                    data-aos-delay='1200'>
                    <Nav />
                </div>
                </div>

                <div className="flex space-x-4">
                <button className="btn btn-sm btn-outline hidden lg:flex py-2.5 px-6"
                    data-aos='fade-down'
                    data-aos-delay='1400'
                >
                    {loginText}
                </button>
                <button className="btn btn-sm btn-outline hidden bg-[#c72825] text-white lg:flex py-2.5 px-6 rounded-xl"
                    data-aos='fade-down'
                    data-aos-delay='1400'
                >
                    {signupText}
                </button>
                </div>
                <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
                    {mobileNav ? (
                        <MdClose className="text-3xl text-accent" />
                    ) : (
                        <HiMenuAlt4 className="text-3xl text-accent" />
                    )}
                </button>

                <div
                    className={`${mobileNav ? "left-0" : "-left-full"
                        } fixed top-0 w-[60vw] lg:hidden transition-all bottom-0 bg-pink-400`}
                >
                    {/* <MobileNav /> */}
                </div>
            </div>
         </header>
    );
};

export default Header;





