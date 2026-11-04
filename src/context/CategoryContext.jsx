// Filtering through the categories from the API and match the books with "correct category" to the request from category menu

// Could I write it so that it can also be used elsewehere i needed? As in: can I manage to make it flexible enough to perhaps rename
// the file to FilterContext and add named functions below that lets the users filter through the categories, titles and authors with
// ease while also making the code shorter and easier to read?

//import needed context and other requirements
import { useContext, createContext } from "react";

const categoryContext = createContext();

export default function CategoryProvider({ children }) {
  //Fethcing catories from api endpoint

  return <></>;
}

//Provider and creating the named useContext with error-catch at the end.

//Rember to check that it finds all the categories listed as a requirement in the assignment text:
// Fiction, Mystery, Thriller, Romace, Fantasy, Morality, Society, Power, Justice, Adventure, Tragedy, War and Philosophy
// Remember to add a way to navigate this in a menu format in Category Meny, where each button with the category name gives a list of books from the correct category

//Might not need this file at all!
//Transfer ideas from here to read me
