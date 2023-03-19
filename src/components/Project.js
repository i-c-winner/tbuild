import React from 'react'
import {Link} from "react-router-dom";
import {design_sections} from "../constants/user";
import DesignSection from "./DesignSection";



function Project () {
  return(
    <div>
      <Link to="/">Home</Link>
      <h2>Сводная таблица по проекту</h2>
      {design_sections.map(section=>{
return <DesignSection section={section} key={section}/>
      })}
    </div>
  )
}






export default Project
