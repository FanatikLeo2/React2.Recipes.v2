import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Category from "./Category.js";
import Dish from "./Dish.js";
import '../styles/Main.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/v2/categories/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ categories: data });
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <React.Fragment>
        <nav className="categories">
          <Link className="homeButton" to={""}>
            Home
          </Link>
          {categories.map((cat) => (
            <Link key={cat.id} to={"categories/" + cat.id}>
              {cat.name}
            </Link>
          ))}
        </nav>
        <Routes>
          <Route path="*" element={null} />
          <Route path="categories/:id/*" element={<Category />} />
          <Route path="categories/:id/dishes/:id" element={<Dish />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default Main;