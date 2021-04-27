import React from "react";
import API from "../../utils/API.js";

function saveToDatabase(event) {
  API.saveBook({
     
  }) 
  
}

function Result(props) {
  return (
  <div>
      <h2>{props.book.volumeInfo.title}</h2>
      <h3>{props.book.volumeInfo.authors.join(", ")}</h3>
      <img src={props.book.volumeInfo.imageLinks.thumbnail}></img>
      <h3>{props.book.volumeInfo.description}</h3>
      <a href={props.book.volumeInfo.infoLink}>Book Link</a>
     <form>
     <button onClick={(event) => {saveToDatabase(event)}}> Favorite! </button>
     </form>
  </div>
  );
}

export default Result;
