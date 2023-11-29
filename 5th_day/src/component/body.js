
import { RestaurantCard } from "./restaurantcard";
import { restaurantList } from "../constant";
import { useState } from "react";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
  
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index

export  const Body = () => {
    // useState: To create a state variable, searchText is local state variable
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [a,setA] = useState(0);
    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a Restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              setA(a+1);
              // filter the data
              const data = filterData(searchText, restaurants);
              // update the state of restaurants list
              setRestaurants(data);
            }}
          >
            Search- {"clicked  " + a + "  times" }
          </button>
        </div>
        <div className="restaurant-list">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            );
          })}
        </div>
      </>
    );
  };
  
