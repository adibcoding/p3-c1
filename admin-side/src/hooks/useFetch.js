import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);

      await new Promise((resolve)=> setTimeout(resolve, 1000))
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return { loading, data, fetchData };
};

export default useFetch;
