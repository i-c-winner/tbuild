import React from 'react'
import filter from "../utils/filter";
import {design_sections} from "../constants/user";
import DesignSection from "./DesignSection";



function Project () {
  return(
    <div>
      {design_sections.map(section=>{
return <DesignSection section={section} key={section}/>
      })}
    </div>
  )
}






export default Project
