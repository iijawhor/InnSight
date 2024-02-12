import React, { useState } from "react";
import "./SearchComponent.css";
import { SearchIcon, InputComponent, fetchFromAPI } from "../../exports/export";
function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkinDate, setCheckinDate] = useState("2024-02-14");
  const [checkoutDate, setCheckoutDate] = useState("2024-02-16");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("1");
  const [sarchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      setLoading(true);
      const response = await fetchFromAPI(
        `search-location?location=${searchQuery}&checkin=${checkinDate}&checkout=${checkoutDate}&adults=${adults}&children=${children}`
      );
      setSearchResults(response.results);
      setLoading(false);
    } catch (error) {
      setError(
        "An error occurred while fetching data. Please try again later."
      );
      setLoading(false);
    }
  };

  return (
    <div className="searchComponent">
      <form action="" className="searchForm" onSubmit={handleSearch}>
        <div className="searchInputs">
          <div className="searchInputContainer searchLocationInput">
            <span className="searchInputLabel">Where</span>
            <InputComponent
              placeholder="search destination"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
        <button className="searchButton" type="submit">
          <SearchIcon style={{ color: "white", fontWeight: "600" }} />
        </button>
      </form>
    </div>
  );
}

export default SearchComponent;
