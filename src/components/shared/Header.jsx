import { useContext } from "react";
import { ShadowContext } from "../../context/shadowContext";

const Header = () => {
    const {setEnglish,english} = useContext(ShadowContext);

    const setLanguage =()=>{

        setEnglish((prevState)=> !prevState );
    }

return( 

    <nav className="flex flex-col md:flex-row justify-between mx-12 mt-12 items-center ">
        <div className="mb-[25px] md:mb-0">
            <a href="/index.html">
                <img src="/img/shadow.png" className="rounded-full md:h-[120px] h-40 " alt="shadow developer"/>
            </a>
        </div>
        <ul className="flex gap-9 justify-center items-center">
            <a href="mailto:bryanjm96@gmail.com">
                <li className="py-3 px-3 rounded-full text-cyan-500 border border-cyan-500 cursor-pointer hover:bg-cyan-700 hover:text-white ">{english ? "contact me!":"Contactame!" }</li>
            </a>
                <div className="cursor-pointer">
                    {english  ? <img src="img/mexico.png" alt="" width="80px" height="80px" onClick={setLanguage } />: <img src="img/estados-unidos.png" alt="" width="80px" height="80px" onClick={setLanguage } />   } 

                </div>

                
   


        </ul>
    </nav>
    

)

}

export default Header;