import control from '../../assets/Group1.png'
const Header = () => {
  return (
    <div className="header-container">
      <div className="discover">Discover your favorites </div>
      <div className="search-wrapper">
        <div className="search-box">
          <span className="search-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.9782 18.525C13.1132 21.6206 7.45572 21.3769 3.87291 17.7941C0.0286903 13.9499 0.0286903 7.71718 3.87291 3.87296C7.71714 0.0287358 13.9499 0.0287365 17.7941 3.87296C21.3769 7.45577 21.6205 13.1133 18.525 16.9782L26.0436 24.4969C26.4708 24.924 26.4708 25.6165 26.0436 26.0437C25.6165 26.4708 24.924 26.4708 24.4968 26.0437L16.9782 18.525ZM5.41971 16.2473C2.42976 13.2574 2.42976 8.40971 5.41971 5.41976C8.40966 2.4298 13.2573 2.4298 16.2473 5.41976C19.235 8.40751 19.2372 13.2503 16.2539 16.2407C16.2517 16.2429 16.2495 16.2451 16.2473 16.2473C16.2451 16.2495 16.2429 16.2517 16.2407 16.2539C13.2502 19.2373 8.40747 19.2351 5.41971 16.2473Z"
                fill="black"
                fillOpacity="0.46"
              />
            </svg>
          </span>

          <input
            type="text"
            className="search-input ps-2"
            placeholder="Search here...."
            style={{color:'black'}}
          />
        </div>
        <img  src={control} style={{maxWidth:'35px'}} />
      </div>
    </div>
  );
};

export default Header;
