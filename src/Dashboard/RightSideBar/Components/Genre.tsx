const Genre = () => {
  return (
    <div className="genre pt-4">
      <h3>Genre</h3>
      <div className="genre-list d-flex flex-column pt-3">
        <button type="button" className="btn btn-outline-light mb-4">
          Action
        </button>
        <button type="button" className="btn btn-outline-light mb-4">
          Comedy
        </button>
        <button type="button" className="btn btn-outline-light mb-4">
          Drama
        </button>
        <button type="button" className="btn btn-outline-light mb-4">
          Sci-Fi
        </button>
        <button type="button" className="btn btn-outline-light mb-4">
          Thriller
        </button>
        <button type="button" className="btn btn-outline-light mb-4">
          Western
        </button>
      </div>
    </div>
  );
};

export default Genre;
