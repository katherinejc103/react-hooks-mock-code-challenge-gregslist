import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({everythingDisplayed}) {
  console.log(everythingDisplayed);
  const cards = everythingDisplayed.map(listing => <ListingCard key={listing.id} description={listing.description} image={listing.image} location={listing.location}/>)
  return (
    <main>
      <ul className="cards">
        {cards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
