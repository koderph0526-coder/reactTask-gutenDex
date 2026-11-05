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

  return (
    <div>
      {data?.map((book) => (
        <p key={book.id}>{book.results.bookshelves.category}</p>
      ))}
    </div>
  );

  //   const activateSearch = async () => {};
};
