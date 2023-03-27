import PersonalAccaunt from "../components/PersonalAcaunt";
import Project from "../components/Project";
import Orders from "../components/Orders";
import DesignSection from "../components/DesignSection";
import CreateOrder from "../components/CreateOrder";

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
  },
  {
    path: '/section/:section',
    element: <DesignSection />
  },
  {
    path: '/create-order/:project/:order',
    element: <CreateOrder />
  }
]

export default routs
