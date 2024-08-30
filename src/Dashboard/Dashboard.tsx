import MainContent from "./MainContent/MainContent";
import RightSideBar from "./RightSideBar/RightSideBar";

const Dashboard = () => {
  return (
    <div className="d-flex MainContent ">
      <MainContent />
      <RightSideBar />
    </div>
  );
};

export default Dashboard;
