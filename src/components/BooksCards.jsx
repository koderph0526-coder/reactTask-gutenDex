//Need a miniature version of the books detail page that display title, image, author and category
//NOTE: Possible that I can just implement this into

import styles from "../App.module.css";

export default function BooksCards() {
  // Logic to fetch needed data? Or should that be put directly into the card? useEffect with [] to avoid the card being rerendered every time?
  return (
    <>
      <div className={styles.bookCard}>
        <h2>{/* book title */}</h2>
        <img src="" alt="" />
      </div>
    </>
  );
}
