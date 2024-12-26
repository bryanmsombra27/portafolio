import { createContext, useState } from "react";
import EnglishVersion from "../data/English-version.json";

 export const ShadowContext = createContext();

export const ShadowProvider = ({children}) =>{

const [english,setEnglish] = useState(false);
const text = EnglishVersion[0];
const heroText = EnglishVersion[1];
const habilities = EnglishVersion[2];
const projects = EnglishVersion[3];
const PersonalProjects = EnglishVersion[4];



return <ShadowContext.Provider value={{ 
english,
text,
heroText,
habilities,
projects,
PersonalProjects,
setEnglish,
}}>
{children}
 </ShadowContext.Provider>
}