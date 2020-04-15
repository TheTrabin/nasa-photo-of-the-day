import React from "react";
import "./Card.css";

const Card = ({ photo }) => {
    // const { photo } = props;
    return (
      <div className="photo-of-the-day">
        <h1>NASA Photo of the Day for {photo.date}</h1>
        <h2>{photo.title}</h2>
        <img src={photo.url} alt="nasa astronomy" width="400px"></img>
        <div className="bottom">
          <p>HD version: <a href="{photo.hdurl}">{photo.hdurl}</a></p>
          <p>{photo.explanation}</p>
        </div>
      </div>
    );
  };

export default Card;
