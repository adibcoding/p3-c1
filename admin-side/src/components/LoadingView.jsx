const LoadingView = () => {
  return (
    <>
      <div
        style={{ position: "absolute", top: '0' }}
        className="h-100 w-100 d-flex justify-content-center align-items-center"
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center"></div> */}
    </>
  );
};

export default LoadingView;
