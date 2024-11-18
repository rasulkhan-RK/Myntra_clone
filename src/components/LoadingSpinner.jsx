const LoadingSpinner = () => {
  return (
    <>
      <center
        style={{
          height: "650px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>
  );
};

export default LoadingSpinner;
