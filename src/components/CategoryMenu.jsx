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
        const res = await fetch(
          "https://gutendex.com/books?topic=bookeshelves}",
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        // console.log(result);
        // handleData(result.results);
        setData(result.category);
      } catch (err) {
        setError(error.message);
      }
    };
    fetchCategories();
  }, []);

  console.log(data);

  return (
    <>
      {/* Make it so that the option functions like a link, pulling all the books from the matching category into display */}
      <select>
        <option>Fiction</option>
        <option>Mystery</option>
        <option>Thriller</option>
        <option>Romance</option>
        <option>Fantasy</option>
        <option>Morality</option>
        <option>Society</option>
        <option>Power</option>
        <option>Justice</option>
        <option>Adventure</option>
        <option>Tragedy</option>
        <option>War</option>
        <option>Philosophy</option>
      </select>
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
