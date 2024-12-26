
import { useContext } from "react";
import { ShadowContext } from "../../context/shadowContext";
import SkillsItem from "./SkillsItem";






const Skills = ({ habilidades }) => {

    const {english,habilities} = useContext(ShadowContext);


    return (
        <section className="flex flex-wrap    mx-auto  md:w-[1200px] md:flex-nowrap">
            
            {!english ? habilidades.map((habilidad, i) => <SkillsItem key={i} item={habilidad} />):
            habilities.map((habilidad, i) => <SkillsItem key={i} item={habilidad} />)  }

          
        </section>
    )

}

export default Skills;