import { useState, useEffect } from "react";
import { nav } from "../data";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdClose } from "react-icons/md"
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

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
        <header
            className={`${isActive ? "lg:top-0 bg-white  shadow-2xl" : "lg;top-[60px]"
                } py-6 lg:py-4 fixed w-full
      transition-all z-10`}
        >

            <div className="container mx-auto flex px-6 justify-between items-center">
                <div className="flex items-center">
                    <a href="#"
                        data-aos='fade-down'
                    >
                        <img src={logo} alt="" />
                    </a>
                    <div className="hidden lg:flex px-10"
                        data-aos='fade-down'
                    >
                        <Nav />
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button className="btn btn-sm btn-outline hidden lg:flex py-2.5 px-6"
                        data-aos='fade-down'

                    >
                        {loginText}
                    </button>
                    <button className="btn btn-sm btn-outline hidden bg-[#c72825] text-white lg:flex py-2.5 px-6 rounded-xl"
                        data-aos='fade-down'

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
                        } fixed top-0 w-[80vw] lg:hidden transition-all bottom-0 bg-[#FFF8EE] `}
                >
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;





