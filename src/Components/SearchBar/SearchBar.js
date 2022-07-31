import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <div className="inputFlex">
          <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
          <li  id="clearBtn" onClick={clearInput}  className={filteredData.length === 0 ? 'fa fa-search' : 'fa fa-close'}></li>
          {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
        </div>
        <div className="sideSearchBar">
          <a href="#" className="bg-none"><li class="fas fa-shopping-cart"></li></a>
          <i class="fa-solid fa-user"></i>
          <p>
            <a href="#" className="userSign">Sign In</a>
            <a href="#" className="userSign">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
