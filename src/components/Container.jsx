/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          maxWidth: "700px",
          height: "auto",
          margin: "20px auto",
          padding: "20px",
          gap: "20px",
          border: "1px solid gray",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
