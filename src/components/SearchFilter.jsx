//Create a function that recieves the input and scans thorugh the mathcing results of the input(storeds the result in local or console?)
//create a button that will function ass a "loading/fetching and appending to visual" function.

import { useState } from "react";

export default function SearchFilter() {
  //useState for the searchbar itself.
  const [searchQuery, setSearchQuery] = useState("");
  //State to store the result
  const [results, setResults] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  return <></>;
}
