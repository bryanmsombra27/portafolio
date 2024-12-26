import { useContext } from "react";
import { ShadowContext } from "../context/shadowContext";

const Hero = () => {
    const { english, text } = useContext(ShadowContext);

    return (

        <section className=" h-full   mt-9 flex flex-col items-center space-y-9 mb-10   md:h-[600px] md:mb-0">
            <h1 className="text-center text-5xl font-bold mt-12">{english ? text.title : "Desarrollador Frontend"}</h1>
            <h3 className="text-center text-2xl mt-9">{english ? text.description : "Desarrollo la maquetación web y realizo la funcionalidad visual de la aplicación"
            }</h3>
            <div className="bg-cyan-700 rounded-full">
                <img src="/img/avatar.svg" alt="avatar" className="w-80 pt-3  border-cyan-400 border-8 rounded-full" />
            </div>
        </section>

    )

}

export default Hero;