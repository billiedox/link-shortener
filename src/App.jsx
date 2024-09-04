import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./components/main";
import UrlShortener from "./components/urlShortener";
import Statistics from "./components/statistics";

function App() {
  const [urls, setUrls] = useState([]);

  async function fetchData() {
    const resUrl = await axios.get(`${import.meta.env.VITE_API_URL}/urls`);
    const { data } = resUrl;
    setUrls(data);
  }

  useEffect(() => {
    fetchData();
  }, []); 

  const handleRemoveUrl = async (_id) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/url/${_id}`);
    fetchData();
  };

  const handleClick = async (url) => {
    try {
      //generate create
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/url/new`, { url });
      const {data : { short_url }} = res;
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const handleCopyText = (id) => {
    setUrls((prevUrls) =>
      prevUrls.map((url, index) => {
        return index === id
          ? { ...url, copied: true }
          : { ...url, copied: false };
      })
    );
  };

  return (
    <div>
      <div className="container relative my-6 px-3 lg:mx-auto lg:px-[6rem]">
        <Main />
        <div className="relative">
          <UrlShortener handleClick={handleClick} />
        </div>
      </div>
      <div>
        <Statistics urlData={urls} handleCopyText={handleCopyText} handleRemoveUrl={handleRemoveUrl}  />
      </div>
    </div>
  );
}

export default App;
