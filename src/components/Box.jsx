/* eslint-disable react/prop-types */
const Box = ({ data, handleClick }) => {
  const { number, uniqueNumber, isClicked } = data;

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        background: "darkgrey",
        display: "flex",
        justifyContent: isClicked ? "flex-start" : "center",
        alignItems: isClicked ? "flex-start" : "center",
        cursor: isClicked ? "default" : "pointer",
        padding: "10px",
        transition: "all 0.3s ease",
      }}
      onClick={handleClick}
    >
      {isClicked ? uniqueNumber : number}
    </div>
  );
};

export default Box;
