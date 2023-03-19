import React from 'react'
import {Link} from "react-router-dom";
import {design_sections} from "../constants/user";
import DesignSections from "./DesignSections";



function Project () {
  return(
    <div>
      <Link to="/">Home</Link>
      <h2>Сводная таблица по проекту такому-то</h2>
      {design_sections.map(section=>{
return <DesignSections section={section} key={section}/>
      })}
    </div>
  )
}






export default Project
