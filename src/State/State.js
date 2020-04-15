import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "../Card/Card.js";

const State = () => {
    const [photo, setPhoto] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=KShacB20DUaVgJk0bUfY9jBJ8L1RnF8ZxMqJ5N6N")
        .then(response => {
          // reference setState fn
          console.log(response);
          setPhoto(response.data);
        })
        .catch(error => console.log("Error!", error));
    }, []);
    return (
      <div className="state">
        
          <Card photo={photo} />
        
      </div>
    );
  };
  
  export default State;
