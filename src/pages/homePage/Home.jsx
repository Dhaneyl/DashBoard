import { Chart, Featured, List, NavBar, SideBar, Widget } from "../../components";

import "./home.scss";

export const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 Months (revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transations</div>
          <List/>
        </div>
      </div>
    </div>
  );
};
