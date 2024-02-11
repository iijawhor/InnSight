import React from "react";
import "./SearchComponent.css";
import { SearchIcon, InputComponent } from "../../exports/export";
function SearchComponent() {
  return (
    <div className="searchComponent">
      <form action="" className="searchForm">
        <div className="searchInputs">
          <div className="searchInputContainer searchLocationInput">
            <span className="searchInputLabel">Where</span>
            <InputComponent placeholder="search destination" />
          </div>
          <hr className="searchInputBreakLine" />
          <div className="searchInputContainer searchInputContainerQueries">
            <span className="searchInputLabel">Check in</span>
            <div>Add dates</div>
          </div>
          <hr className="searchInputBreakLine" />
          <div className="searchInputContainer searchInputContainerQueries">
            <span className="searchInputLabel">Check out</span>
            <div>Add dates</div>
          </div>
          <hr className="searchInputBreakLine" />
          <div className="searchInputContainer searchInputContainerQueries">
            <span className="searchInputLabel">Who</span>
            <div>Add guests</div>
          </div>
        </div>
        <button className="searchButton">
          <SearchIcon style={{ color: "white", fontWeight: "600" }} />
        </button>
      </form>
    </div>
  );
}

export default SearchComponent;
