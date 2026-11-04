//Main workplace to build everything here and then break it down to smaller components
import { useState, useEffect, useContext, createContext } from "react";

export const HeaderBuild = () => {
  const [category, setCategory] = useState([]);
  //Api fetch states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://gutendex.com/books/");

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        // console.log(result);
        // handleData(result.results);
        setData(result.results);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    console.log("data hentet");
    console.log(data[0]);
  }, [data]);

  //   const handleData = (apiData) => {
  //     setData(apiData);
  //     // console.log(apiData);
  //     console.log(data);
  //   };

  //   Empty div for console check ease
  return (
    <div>
      <p>{data ? data[0].title : "lol"}</p>
    </div>
  );

  //   const activateSearch = async () => {};
};
