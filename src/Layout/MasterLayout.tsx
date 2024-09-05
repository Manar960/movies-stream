import { Outlet } from 'react-router-dom';
import AppSideBar from './Aside/AppSideBar';

const MasterLayout = () => {
  return (
    <>
      <div className="sidebar">
        <AppSideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MasterLayout;
