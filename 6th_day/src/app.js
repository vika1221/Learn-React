
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import { Body } from "./component/body";  // named import
import Footer from "./component/footer";  // default import

/* My Food App structure will look like this, 
            1) Header
                - Title (Logo)
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
