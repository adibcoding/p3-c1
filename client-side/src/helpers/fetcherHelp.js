export const fetcherHelp = (url = "", method = "GET", data = {}) => {
  let option = {};
  if (method !== "GET") {
    option = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  }

  const fetchData = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(url, option);
      console.log(response);
      if (!response.ok) throw await response.text();
      const responseJson = await response.json();
      
      return responseJson;
    } catch (err) {
      throw err;
    }
  }

  return fetchData

};
