import PersonalAccaunt from "../components/PersonalAcaunt";
import Project from "../components/Project";
import Orders from "../components/Orders";

const routs = [
  {
    path: '/',
    element: <PersonalAccaunt />
  },
  {
    path: '/:project',
    element: <Project />
  },
  {
    path: '/:project/:order',
    element: <Orders />
  }
]

export default routs
