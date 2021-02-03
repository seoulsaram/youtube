import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  //검색이라는 이벤트가 발생하면 무조건 이 onSearch 콜백함수를 불러!
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;

    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <img className={styles.img} src="/images/youtubeLogo.png" alt="Logo" />
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
};

export default SearchHeader;
