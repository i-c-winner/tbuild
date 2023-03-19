import {main} from "../constants/user";
function filter(key, value) {
return  main.filter(element=>{
    return element[key]===value
  })
}

export default filter
