import React from "react";

function SimpsonQuotes({ quote }) {
  return (
    <div className="SimpsonQuotes">
      <img src={quote.image} alt={quote.character} />
      <ul>
        <li>Quote: {quote.quote}</li>
        <li>Name: {quote.character}</li>
      </ul>
    </div>
  );
}

export default SimpsonQuotes;
