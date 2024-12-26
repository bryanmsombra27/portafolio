import { useContext } from "react";
import { ShadowContext } from "../context/shadowContext";
const Welcome = () => {

    const {heroText,english} = useContext(ShadowContext);

    return (

        <section className="h-full  bg-cyan-500 space-y-[50px]   md:h-[400px] "  >
            <div className="md:w-[1200px] h-full flex   flex-col justify-evenly items-center mx-auto  ">
                <div className="text-center  mt-[50px] md:mt-0 ">
                    <h3 className="font-bold text-4xl text-center  p-3 md:p-0 ">{english ? heroText.welcome:"Hola! Soy Bryan Ochoa. Te doy la  Bienvenida a mi Portafolio Web"  } </h3>

                </div>
                <div>
                    <p className="text-2xl text-justify p-9 md:p-0">
                        {english ? heroText.description: "Desde que comence mi viaje en el desarrollo web hace 4 años he desarrollado proyectos personales y recientemente egrese de la universidad, comenzando asi la busqueda para  conseguir un empleo como desarrollador frontend. A continuacion, puedes hechar un ojo sobre los trabajos en los que he colaborado" }
                    </p>
                </div>

            </div>

        </section>

    )

}

export default Welcome;