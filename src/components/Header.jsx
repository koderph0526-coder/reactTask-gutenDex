// Header component
// Books logo?
// Search bar: input field + search button that initiates the search of matching books/titles/genres
import { useState, useEffect, useRef } from "react";
// import style here when made!

export default function Header() {
  //useState for the dropdown menu -> default false ofc
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); //What tha heck is this hook? research!

  //close dropdown when user clicks outside it:
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
  });
  return <></>;
}
