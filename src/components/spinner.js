const Spinner = ({ width, height, classes }) => {
  return (
    <div
      className={`spinner-border ${classes}`}
      style={{ width: width, height: height }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
