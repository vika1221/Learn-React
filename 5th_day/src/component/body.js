
import { RestaurantCard } from "./restaurantcard";
import { restaurantList } from "../constant";
  
  // Body Component for body section: It contain all restaurant cards
  // We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

  export  const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
    );
  };

