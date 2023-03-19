import PersonalAccaunt from "../components/PersonalAcaunt";
import Project from "../components/Project";
const routs = [
  {
    path: '/',
    element: <PersonalAccaunt />
  },
  {
    path: '/project/:project',
    element: <Project />
  }
]

export default routs
