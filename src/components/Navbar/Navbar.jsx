import { RiSunFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import useDarkMode from "../../useDarkMode";


const Navbar = (props) => {
    const { isMobile } = props;
    const [openMenu, setOpenMenu] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className="flex items-center ">
            <div className="flex items-center ">
                <div className="text-[20px] font-bold mr-2">
                    Card Smart </div>
                { isDarkMode ? (
                    <RiSunFill size={"25px"} color="#facc15" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)} />
                ):(
                    <BsFillMoonStarsFill size={"24px"} color="#facc15" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)}/>     
                )}

            </div>
            <ul className="md:flex md:gap-8 ml-auto text-[16px]">
                {openMenu && isMobile ? (
                    <AiOutlineCloseCircle
                        size={'24px'}
                        className="cursor-pointer "
                        onClick={handleMenu}
                    />
                ) : !openMenu && isMobile ? (
                    <GiHamburgerMenu
                        size={"20px"}
                        className="cursor-pointer"
                        onClick={handleMenu}
                    />

                ) : (
                    <>
                        <li className=" hover:text-purple-300 transition-all duration-300 cursor-pointer">Features</li>
                        <li className=" hover:text-purple-300 transition-all duration-300cursor-pointer">Menu </li>
                        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer">Contact</li>
                        <li className="hover:text-purple-300 transition-all duration-300 cursor-pointer ml-[30px]">About</li>
                    </>
                )}
                {openMenu && (
                    <div className="absolute right-8 p-5 rounded-lg bg-slate-300 text-center text-black text-[13px]">
                        <li className="cursor-pointer">Feature</li>
                        <li className="cursor-pointer">Menu </li>
                        <li className="cursor-pointer">Contact</li>
                        <li className="cursor-pointer">About</li>

                    </div>
                )}
            </ul>
        </nav>
    );

};
export default Navbar;