import U1 from "../../../assets/Ellipse 8.png";
import U2 from "../../../assets/Ellipse 9.png";
import U3 from "../../../assets/Ellipse 10.png";
import plus from "../../../assets/Plus.png";


const Users = () => {
  return (
    <div className="d-flex flex-column user-container pt-4 mt-5">
      <img src={U1} alt="Profile" className="user-img" />
      <img src={U2} alt="Profile" className="user-img" />
      <img src={U3} alt="Profile" className="user-img" />
      <div className="circle ">
        <img src={plus} alt="plus" className="plus"/>
      </div>
    </div>
  );
};

export default Users;
