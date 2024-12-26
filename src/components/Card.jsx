import { useContext } from "react";
import { ShadowContext } from "../context/shadowContext";

const Card = ({item}) => {
    const {title,description,link,img,alt,tools} = item;
    const {english} = useContext(ShadowContext);

return( 
<>

    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-around ">
        <img src={img} alt={alt} className="w-full mx-auto" />
        <h3 className="text-2xl font-bold text-center uppercase my-5"> {title}</h3>
        <p className="text-justify"> {description}</p>

        <h4 className="font-bold text-lg mt-9 mb-4 text-center   ">{english ? "Technologies with which the project was developed:":" Tecnologias con las que se desarrollo el proyecto:" }</h4>

        <div className="flex lg:justify-between mx-auto justify-center items-center w-full flex-wrap">

        {tools.map((tool, i)=>
        <img className="icon md:p-2 md:m-6 block mx-auto mt-4" src={`/img/icons/${tool}.svg`} alt={tool} key={i} /> 
           )}
        </div>

        <div className="flex justify-end">
            <a href={link} target="_blank" className="text-white bg-cyan-500 rounded-md font-bold text-xl mt-9 md:mt-4 p-2 hover:bg-white hover:text-cyan-500 transition border border-cyan-500">{english ? "Visit Site":"Visitar Sitio"}</a>
        </div>
    </div>

</>

)

}

export default Card;