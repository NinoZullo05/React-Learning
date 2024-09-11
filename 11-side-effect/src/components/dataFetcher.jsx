import { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData('Fetched data from API!');
      setLoading(false);
    }, 2000);
    
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
};

export default DataFetcher;
