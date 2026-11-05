// fetching the different categories on different commands?
//Ex have a funciton that can be imported into header (possibly a use context would be better? if it's to be reused)
// that lets users sort the books by category

import { useState, useEffect } from "react";

export default function CategoryMenu() {
  const [category, setCategory] = useState([]);

  //   fetching the category endpoint from API
  const [data, setData] = useState([]);
  //Setting it to start loading on first render(Display loading text/animation for this while it loads?)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const []

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
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <button>Fiction</button>
        <button>Mystery</button>
        <button>Thriller</button>
        <button>Romance</button>
        <button>Fantasy</button>
        <button>Morality</button>
        <button>Society</button>
        <button>Power</button>
        <button>Justice</button>
        <button>Adventure</button>
        <button>Tragedy</button>
        <button>War</button>
        <button>Philosophy</button>
      </div>
      {/* <button {data.map(()=>{
      bookshelves.category
    })}></button> */}

      {/* <div>
        {data?.map((book) => (
          <p key={book.id}>{book.results}</p>
        ))}
      </div> */}
    </>
  );
}

// const [category, setCategory] = useState([]);
// //Api fetch states
// const [data, setData] = useState([]);
// const [loading, setLoading] = useState(true);

//F it, hard code the buttons and get the code to find all the books(as if searching for a match) that matches the category in
// question. Use the 'topics' part of documentation to access the category "https://gutendex.com/"
