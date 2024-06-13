import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/Dish.css'

function Dish() {
  const params = useParams();
  const [dish, setDish] = useState({});

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v2/dishes/${params.id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDish(data);
      } catch (error) {
        console.error("Error fetching dish:", error);
      }
    };

    fetchDish();
  }, [params]);

  return (
    <React.Fragment>
      <div className="recipy-container">
        <div>Dish:</div>
        <div className="dish-name">{dish.name}</div>
        <div>Reciept:</div>
        <div className="recipy-name">{dish.description}</div>
      </div>
    </React.Fragment>
  );
}

export default Dish;