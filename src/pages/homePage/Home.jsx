import { NavBar, SideBar, Widget } from "../../components";

import "./home.scss";

export const Home = () => {
  return (
  <div className="home"> 
    <SideBar/>
    <div className="homeContainer"> 
     <NavBar/>
     <div className="widgets">
      <Widget/>
      <Widget/>
      <Widget/>

     </div>
    </div>
  </div>
  )
};
