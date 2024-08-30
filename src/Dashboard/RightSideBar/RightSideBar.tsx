import Genre from './Components/Genre';
import MediaService from './Components/MediaService';

const RightSideBar = () => {
  return (
    <div className="RightSideBar pt-5 ps-4">
      <MediaService />
      <Genre />
    </div>
  );
};

export default RightSideBar;
