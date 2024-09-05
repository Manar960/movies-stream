import Genre from './Components/Genre';
import MediaService from './Components/MediaService';

const RightSideBar = () => {
  return (
    <div className="RightSideBar pt-5 ps-3 d-none d-sm-block d-md-block">
      <MediaService />
      <Genre />
    </div>
  );
};

export default RightSideBar;
