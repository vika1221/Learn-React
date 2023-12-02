
import { IMG_CDN_URL } from "../constant";

// Restaurant card component: Image, name, cuisine
export const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <span>
          <h4>
            <i className="star">★</i>
            {avgRating}
          </h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };
  
                // we can do like this also
  // const RestaurantCard = (props) => {
  //   return (
  //     <div className="card">
  //       <img
  //         src={
  //           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
  //           props?.cloudinaryImageId
  //         }
  //       />
  //       <h2>{props?.name}</h2>
  //       <h4>{props?.cuisines.join(", ")}</h4>
  //       <h4>{props?.area}</h4>
  //       <span>
  //         <h4>
  //           <i className="star">★</i>
  //           {props?.avgRating}
  //         </h4>
  //         <h4>{props?.lastMileTravelString}</h4>
  //         <h4>{props?.costForTwoString}</h4>
  //       </span>
  //     </div>
  //   );
  // };