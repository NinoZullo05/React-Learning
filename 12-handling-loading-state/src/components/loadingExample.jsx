import { useState, useEffect } from "react";

const LoadingExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch with a timeout
    setTimeout(() => {
      setData("Data has been loaded!");
      setLoading(false);
    }, 3000); // Simulate a 3-second data fetch
  }, []);

  return <div>{loading ? <p>Loading...</p> : <p>{data}</p>}</div>;
};

export default LoadingExample;
