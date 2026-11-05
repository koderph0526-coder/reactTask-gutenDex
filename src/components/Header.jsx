// Header component
// Books logo?
// Search bar: input field + search button that initiates the search of matching books/titles/genres
import { useState, useEffect, useRef } from "react";
// import styles from "App.modules.css";
// import style here when made!

export default function Header() {
  //useState for the dropdown menu -> default false ofc
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); //What tha heck is this hook? research! -> it refers to somehting?

  //close dropdown when user clicks outside it:
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsDropdownOpen(false);
  //     }
  //   };
  // });

  return <>{/* <div className={styles.navBar}></div> */}</>;
}

// notes
// fetch dropdown into a button here?
//Make search logic (-> input field filter and map result that matches) and apply logic
//Have the submit button be what triggers the print to page in divCards?
