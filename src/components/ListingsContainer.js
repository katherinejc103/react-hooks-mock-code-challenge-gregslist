import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({everythingDisplayed}) {
  console.log(everythingDisplayed);
  const cards = everythingDisplayed.map(listing => <ListingCard key={listing.id}/>)
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
