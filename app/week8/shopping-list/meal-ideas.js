'use client'
import {useState, useEffect} from "react";

export default function MealIdeas( {ingredient} ) {

    const [meals, setMeals] = useState([])

    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data.meals);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    console.log(ingredient);

    return (
        <div>
          <header>List of Meals</header>
          {meals === null ? (
            <p>No meals available with that ingredient.</p>
          ) : (
            <ul>
              {meals.map((meal) => (
                <li key={meal.idMeal}>{meal.strMeal}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

async function fetchMealIdeas(ingredient) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data;
}