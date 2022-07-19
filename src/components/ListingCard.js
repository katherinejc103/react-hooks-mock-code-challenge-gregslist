import React, {useState} from "react";

function ListingCard({description, location, image}) {

  const [favorite, setFavorite] = useState(false);
  const [deleteThis, setDeleteThis] = useState(false);

  function handleFavorite(){
    setFavorite(!favorite)
  }


  function handleDelete(){
    setDeleteThis(!deleteThis)
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
