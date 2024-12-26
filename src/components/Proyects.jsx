import { useContext } from "react";
import { ShadowContext } from "../context/shadowContext";
import Card from "./Card";

const Proyects = ({proyects,title,isRecent}) => {

    const {english,projects,PersonalProjects} = useContext(ShadowContext);   
    const englishTitle  = english &&  isRecent && "My Latest Works";
    title = !english &&  title ? title: "Personal Proyects";

return( 
    <section className={isRecent ? "mt-8":"mt-[80px]"  }>
    <h2 className="text-3xl font-bold text-center mb-9">{english &&  isRecent ? englishTitle:title} </h2>
    <div className={`grid grid-cols-1  gap-4 p-6 ${isRecent ? "md:grid-cols-2":"md:grid-cols-3"}`}>
        {english && isRecent ? projects.map((proyect,i) =>  <Card key={i} item={proyect} />  ) :  english && !isRecent ?  PersonalProjects.map((proyect,i) =>  <Card key={i} item={proyect} />  ): proyects.map((proyect,i) =>  <Card key={i} item={proyect} />  )   }
    </div>
    </section>
)

}

Proyects.defaultProps =
{
    title: 'Mis Trabajos Más Recientes' ,
    isRecent:true
}
export default Proyects;
