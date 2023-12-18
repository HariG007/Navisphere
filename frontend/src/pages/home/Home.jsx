import Sidebar from "../../components/sidebar/Sidebar";

import "./home.scss";
import DashboardDefault from '../../components/Dashboardcomp/index';
import Subscriptions from "../Subscriptions/Subscriptions";
import SubsTable from "../UserProfile/SubsTable/SubsTable";

const Home = () => {
  return (
    <div className="home" >
      <Sidebar />
      <div className="homeContainer">
        <SubsTable/>
      </div>
    </div>
  );
};

export default Home;
