import { useEffect, useState } from "react";

const useMutation = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  const dispatcher = async (url, option) => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(url, option);

      const responseJson = await response.json();
      setData(responseJson);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, dispatcher };
};

export default useMutation;
