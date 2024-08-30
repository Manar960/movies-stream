import Buttons from './Components/Buttons';
import SideBar from './Components/SideBar';
import Users from './Components/Users';

const AppSideBar = () => {
  return (
    <div className=" d-flex flex-column">
      <div className="main-side">
        <SideBar />
        <Users />
      </div>

      <Buttons />
    </div>
  );
};

export default AppSideBar;
