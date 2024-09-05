import MainContent from './MainContent/MainContent';
import RightSideBar from './RightSideBar/RightSideBar';

const Dashboard = () => {
  return (
    <div className="MainContent d-flex">
      <MainContent />
      <RightSideBar />
    </div>
  );
};

export default Dashboard;
