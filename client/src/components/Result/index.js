import React from "react";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Result(props) {
  return (
  <div>
      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors.join(", ")}</h3>
      <img src={props.book.volumeInfo.imageLinks.thumbnail}></img>
      <h3>{props.book.volumeInfo.description}</h3>
      <a href={props.book.volumeInfo.infoLink}></a>
  </div>
  );
}

export default Result;
