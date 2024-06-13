import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Dish from "./Dish.js";
import '../styles/Category.css'

function Category() {
  const params = useParams();
  const [allDishes, setAllDishes] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v2/dishes/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAllDishes(data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    const fetchCategory = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v2/categories/${params.id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCurrentCategory(data.name);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchDishes();
    fetchCategory();
  }, [params]);

  return (
    <React.Fragment>
      <h2>Dishes from category: </h2>
      <h2 className="category-name">{currentCategory}</h2>
      <nav className="dishes">
        <ul>
          {allDishes.map((dish) => {
            if (dish.category == params.id) {
              return (
                <li key={dish.id}>
                  <Link to={"dishes/" + dish.id}>{dish.name}</Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
      <Routes>
        <Route path="dishes/:id/" element={<Dish />} />
      </Routes>
    </React.Fragment>
  );
}

export default Category;