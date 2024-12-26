import { useContext } from "react";
import { ShadowContext } from "../../context/shadowContext";

const Footer = () => {

    const {english} = useContext(ShadowContext);

return( 

    <footer className="bg-cyan-500 h-full md:h-60">
    <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-center uppercase my-9">{english ? "Do you like my work, cheer up and let's develop something together...":"Te agrada mi trabajo, animate y desarrollemos algo juntos..." } </p>
        
        <div className="redes-sociales flex flex-col md:flex-row  md:space-x-12 mt-7 items-center justify-center  space-y-12 md:space-y-0 " >
            <a href="https://www.facebook.com/bryanjair.villanuevaochoa/" target="_blank" className="hover:text-white  cursor-pointer">
                <i className="fab fa-facebook fa-3x"></i>
            </a>

            <a href="https://twitter.com/BryanmOchoa" target="_blank" className="hover:text-white  cursor-pointer">
                <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a href="mailto:bryanjm96@gmail.com" className="hover:text-white  cursor-pointer">
                <i className="fas fa-envelope fa-3x"></i>
            </a>
            <a href="https://github.com/bryanmsombra27" target="_blank" className="hover:text-white  cursor-pointer">
                <i className="fab fa-github fa-3x"></i>
            </a>
       
            <a href="https://www.linkedin.com/in/bryan-jair-villanueva-ochoa-18574423b/" target="_blank" className="hover:text-white  cursor-pointer">
                <svg className="svg-inline--fa fa-linkedin-in fa-fw fa-2x" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>
  
        </div>

    </div>
</footer>


)

}

export default Footer;