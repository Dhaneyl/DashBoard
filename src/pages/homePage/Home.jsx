import { NavBar, SideBar } from "../../components";

import "./home.scss";

export const Home = () => {
  return (
  <div className="home"> 
    <SideBar/>
    <div className="homeContainer"> 
     <NavBar/>
     home container
    </div>
  </div>
  )
};
