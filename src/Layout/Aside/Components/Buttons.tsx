import icon from "../../../assets/Icon.png";

const Buttons = () => {
  return (
    <div className="d-flex pt-5 mt-5 toggle-switch justify-space-between">
      <div className="toggle-switch-container">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <img src={icon} alt="Icon" className="icon-img" />
    </div>
  );
};

export default Buttons;
