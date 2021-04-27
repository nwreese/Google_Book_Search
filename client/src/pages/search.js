import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Result from "../components/Result";
import Nav from "../components/Nav";
import ParticlesBg from 'particles-bg';

function Search () {
    const  [keyword, setKeyword] = useState("")
    const [bookResults, setBookResults] = useState([])

    function handleInputChange(event) {
        setKeyword(event.target.value) 
      };
    
    function handleSearch (event) {
        event.preventDefault()
        console.log(keyword)
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + keyword)
        .then(response => response.json())
        .then(data => {
            setBookResults(data.items)
        })
    };

    function saveToDatabase(event) {
       API.saveBook({
          
       }) 
       
    }

    return (
        <>
        <div>
            <Nav />
            <form onSubmit={(event) => {handleSearch(event)}}>
            <input onChange={(event) => {handleInputChange(event)}} type="text"/>
            <button type="submit">Search</button>
            </form>
            <div>
                <h1>These are your results</h1>
                <div>
            {
                
                bookResults.map( book => {
                    return( 
                    <Result book={book}/>)
                })
            }
                </div>
            </div>
        </div>
        <ParticlesBg type="circle" bg={true} />
        </>

    )
}
export default Search;