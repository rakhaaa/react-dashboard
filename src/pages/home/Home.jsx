import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/list/List";
import WidgetList from "../../components/widget/WidgetList";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <WidgetList />
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="lists">
          <div className="listTitle">Latest Transaction</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
