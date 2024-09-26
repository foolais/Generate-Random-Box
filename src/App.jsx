import { useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import Box from "./components/Box";

const App = () => {
  const [data, setData] = useState([]);

  const generateUniqueNumber = (total) => {
    const numbersArray = Array.from({ length: total }, (_, i) => i + 1);

    for (let i = numbersArray.length - 1; i > 0; i--) {
      const uniqueNumber = Math.floor(Math.random() * (i + 1));
      const temp = numbersArray[i];
      numbersArray[i] = numbersArray[uniqueNumber];
      numbersArray[uniqueNumber] = temp;
    }

    const newData = numbersArray.map((uniqueNumber, index) => ({
      number: index + 1,
      uniqueNumber,
      isClicked: false,
    }));

    console.log({ newData });

    setData(newData);
  };

  const handleSubmit = (value) => {
    setData([]);
    generateUniqueNumber(value);
  };

  const handleClick = (number) => {
    const newData = data.map((item) => {
      if (item.number === number) {
        return {
          ...item,
          isClicked: true,
        };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <Container>
      <Input onSubmit={handleSubmit} />
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {data.map((data) => (
          <Box
            key={data.number}
            data={data}
            handleClick={() => handleClick(data.number)}
          />
        ))}
      </div>
    </Container>
  );
};

export default App;
