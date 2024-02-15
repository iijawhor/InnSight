import React from "react";
import "./SearchResults.css";
import { Card } from "../../exports/export";
import { useSelector } from "react-redux";
function SearchResults() {
  const searchResults = useSelector(
    (state) => state.searchResult.searchResults
  );
  return (
    <div className="searchResultsComponent">
      <div className="searchesResultContainer">
        {searchResults.map((searchedData) => (
          <div className="searchResultCard" key={searchedData.id}>
            <Card
              key={searchedData.id}
              rating={searchedData.rating}
              reviewsCount={searchedData.reviewsCount}
              availableDate={searchedData.availableDate}
              houseRent={searchedData.price.rate}
              images={searchedData.images}
              address={searchedData.address}
              currency={searchedData.price.currency}
              name={searchedData.name}
              beds={searchedData.beds}
              bedrooms={searchedData.bedrooms}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
