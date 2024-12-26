import { useContext } from "react";
import { ShadowContext } from "../context/shadowContext";

const Hero = () => {
    const { english, text } = useContext(ShadowContext);

    return (

        <section className=" h-full   mt-9 flex flex-col items-center space-y-9 mb-10   md:h-[600px] md:mb-0">
            <h1 className="text-center text-5xl font-bold mt-12">{english ? text.title : "Desarrollador FullStack"}</h1>
            <h3 className="text-center text-2xl mt-9 w-[900px]">{english ? text.description : "Creo API's para la comunicación entre el backend y frontend y  Desarrollo aplicaciones web  o moviles segun las necesidades del proyecto."
            }</h3>
            <div className="bg-cyan-700 rounded-full">
                <img src="/img/avatar.svg" alt="avatar" className="w-80 pt-3  border-cyan-400 border-8 rounded-full" />
            </div>
        </section>

    )

}

export default Hero;