import { createContext, useContext, useState, useEffect } from "react";

export default function ApiDataContext() {
  // creating seperate contexts for each endpoint I want to acces data from
  const categoyContext = createContext();
  const bookTitleContext = useContext();
  return <></>;
}
