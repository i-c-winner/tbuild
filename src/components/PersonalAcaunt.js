import React from 'react'
import {List, Box} from "@mui/material";
import {user} from "../constants/user"
import {projects} from "../constants/user";
import {Link} from "react-router-dom";

const classesForList = {
  display: "flex",
  flexFlow: "column",
  padding: "5px",
  borderRadius: "5px",
  border: '1px solid red'
}

function PersonalAccaunt() {
function getUrl(url) {
    return `/${url}`
}
  return (
    <div className="personal-accaunt">
      <h3 className="personal-accaunt__title">Личный кабинет</h3>
      <div className="personal-accaunt__data">
        <Box>
          <h4>Персональные данные</h4>
          <List sx={classesForList}>
            {Object.entries(user).map(item => {
              return <p key={item[0]}>{item[0]}: {item[1]}</p>
            })}
          </List>
        </Box>

        <Box>
          <h4>Объекты</h4>
          <List sx={classesForList}>
            {Object.entries(projects).map(item => {

              return <p key={item[1].name}>{item[0]} <Link to={getUrl(item[1].name)}>{item[1].name}</Link></p>
            })}
          </List>
        </Box>
      </div>

    </div>
  )
}

export default PersonalAccaunt
