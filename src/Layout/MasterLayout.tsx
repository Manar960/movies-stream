import { Outlet } from 'react-router-dom';
import AppSideBar from './Aside/AppSideBar';

const MasterLayout = () => {
  return (
    <>
      <AppSideBar />
      <div className="content">
        <Outlet />
      </div>{' '}
    </>
  );
};

export default MasterLayout;
