import React from 'react'
import {Link, useParams} from "react-router-dom";
import {design_sections} from "../constants/user";
import DesignSections from "./DesignSections";


function Project() {
  const params = useParams()
  return (
    <div className="project">
      <Link to="/">Home</Link>
      <h2>{params.project}</h2>
      <div className="project__box">
        <p className="project__description">
          Проект <span project__description_span> {params.project}</span> - полное описание по проекту. Адрес
          строительсвта. Описание. К примеру жилой дом по адресу: ул.Мира, 27. 12-этажный, с подземномй парковкой.
          Руводитель проекта Сидоров Петр Иванович, тел. +998 90 412 25 36. Начало строительства январь 2022года.
          Окончание строительства  март 2024г.
        </p>
        <table className="project_persons">
          <caption>Список ответсвенных лиц по проекту</caption>
          <thead>
          <tr>
            <td>Имя</td>
            <td>Компания</td>
            <td>Должность</td>
            <td>Телефон</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Иванов Сергей</td>
            <td>СтройИнвест</td>
            <td>Главный инженер</td>
            <td>+998 91 775 24 45</td>
          </tr>
          <tr>
            <td>Сергеев Иван</td>
            <td>Монолитстрой</td>
            <td>Начальник участка</td>
            <td>+998 91 723 25 63</td>
          </tr>
          </tbody>
        </table>

      </div>
      {design_sections.map(section => {
        return <DesignSections section={section} key={section}/>
      })}
    </div>
  )
}


export default Project
