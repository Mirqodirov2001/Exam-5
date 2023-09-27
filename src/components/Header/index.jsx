import "./style.scss"
import Dark from "../../components/UI/Button"
import gamburger from "../../assets/images/Hamburger_icon.svg.png"

const index = () => {
    return (
        <header>
            <nav className="nav1 fixed max-w-full top-0 z-999 bg-white  flex gap-[555px] items-center">
                <div className=" flex gap-[400px]">
                    <h1 className=" text101 cursor-pointer text-[35px] font-bold">
                        &lt;MA /&gt;          
                    </h1>
                </div>
            
                <ul className=" list flex gap-[24px] text-[16px] font-[inter] text-[#4B5563] font-medium items-center ">
                    
                    <a href="#about"><li className="nav_list_item  cursor-pointer ">About</li></a>
                    <a href="#work"><li className="nav_list_item  cursor-pointer ">Work</li></a>
                    <a href="#testimonials"><li className="nav_list_item  cursor-pointer ">Testimonials</li></a>
                    <li className="nav_list_item  cursor-pointer ">Contact</li>
                    <div className=" flex gap-[16px]">
                        <Dark />
                        <div>
                            <a href="https://telegra.ph/Hello-09-26-106"><button className=" button1 text-[16px] font-normal font-[inter] text-white">Download CV</button></a>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default index;