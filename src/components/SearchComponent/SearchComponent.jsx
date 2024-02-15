import React, { useState } from "react";
import "./SearchComponent.css";
import {
  SearchIcon,
  InputComponent,
  fetchFromAPI,
  setSearchData
} from "../../exports/export";
import { DateCalendar } from "@mui/x-date-pickers";
import { useDispatch } from "react-redux";
function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkinDate, setCheckinDate] = useState("2024-02-16");
  const [checkoutDate, setCheckoutDate] = useState("2024-02-22");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("1");
  const [currency, setCurrency] = useState("INR");
  const [sarchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleCheckinDateCalender, setToggleCheckinDateCalender] =
    useState(false);
  const [toggleCheckoutDateCalender, setToggleCheckoutDateCalender] =
    useState(false);
  const dispatch = useDispatch();
  const search = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetchFromAPI(
        `search-location?location=${searchQuery}&checkin=${checkinDate}&checkout=${checkoutDate}&adults=${adults}&children=${children}&currency=${currency}`
      );
      setSearchResults(response.results);
      dispatch(setSearchData(response.results));
      setLoading(false);
      console.log(response.results);
    } catch (error) {
      console.log(error);
      setError(
        "An error occurred while fetching data. Please try again later."
      );
      setLoading(false);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    search();
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
          <div
            className="searchInputContainer searchInputContainerQueries"
            onClick={() =>
              setToggleCheckinDateCalender(!toggleCheckinDateCalender)
            }
          >
            <span className="searchInputLabel">Check in</span>
            <div>
              {checkinDate ? <span>{checkinDate}</span> : <span>Add date</span>}
              {toggleCheckinDateCalender && (
                <div className="checkinCalender">
                  <DateCalendar
                    className="calender"
                    // onChange={(date) => setCheckinDate(date)}
                    // value={checkinDate}
                  />
                </div>
              )}
            </div>
          </div>
          <hr className="searchInputBreakLine" />
          <div
            className="searchInputContainer searchInputContainerQueries"
            onClick={() =>
              setToggleCheckoutDateCalender(!toggleCheckoutDateCalender)
            }
          >
            <span className="searchInputLabel">Check out</span>
            <div>
              {checkoutDate ? (
                <span>{checkoutDate}</span>
              ) : (
                <span>Add date</span>
              )}
              {toggleCheckoutDateCalender && (
                <div className="checkoutCalender">
                  <DateCalendar
                    className="calender"
                    // onChange={(date) => setCheckoutDate(date)}
                    // value={checkoutDate}
                  />
                </div>
              )}
            </div>
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
