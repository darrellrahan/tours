import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import NoTours from "./NoTours";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const res = await fetch("https://course-api.com/react-tours-project");
    const data = await res.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInterest = (rmIndex) =>
    setData((prevValue) =>
      prevValue.filter((element, index) => index != rmIndex)
    );

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data.length !== 0) {
    return (
      <main>
        <Tours data={data} onClick={handleInterest} />
      </main>
    );
  }

  return (
    <main>
      <NoTours onClick={() => getData()} />
    </main>
  );
}

export default App;
