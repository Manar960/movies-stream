import f1 from '../../assets/Rectangle 11.png';
import f2 from '../../assets/Rectangle 12.png';
import play from '../../assets/Play2.png';

const Movies2 = () => {
  return (
    <div className="pt-5">
      <div className="heading ps-4">
        <h3 className="d-flex align-items-center">
          Continue watching <span className="ms-2">(3 Movies Remaining)</span>
          <button type="button" className="btn btn-outline-warning ms-5">
            See more
          </button>
        </h3>
      </div>
      <div className="movie pt-4 d-flex">
        <div className="f1 d-flex flex-column pe-5">
          <img src={f1} alt="Movie 1" />
          <button type="button" className="btn btn-outline-dark mt-3">
            Shrek 3 2022
            <img src={play} alt="play" />
          </button>
        </div>
        <div className="f1 d-flex flex-column">
          <img src={f2} alt="Movie 2" />
          <button type="button" className="btn btn-outline-dark mt-3">
            Riverdale 2 2019
            <img src={play} alt="play" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies2;
