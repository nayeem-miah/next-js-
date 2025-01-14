"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      //   console.log(data.meals.length);
      setMeals(data.meals);
    } catch (error) {
      console.error("error :>> ", error);
      setError("no data found.........");
    }
  };

  const handleSearch = async (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, [search]);

  console.log(meals);
  return (
    <div className="mt-20">
      <h3 className="text-3xl text-green-500 font-semibold">
        Chose your meals{" "}
      </h3>
      <p>chose meals of your searching........</p>
      <div className="mt-7">
        <input
          onChange={handleSearch}
          className="p-4 outline-none border-transparent bg-gray-300 text-green-500"
          type="text"
          name=""
          id=""
          placeholder="searching meals"
        />
        <button
          onClick={() => loadData()}
          className="bg-green-500 p-4 hover:bg-green-700"
        >
          searching
        </button>

        <div className="mt-12 grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-10">
          {meals?.length > 0 &&
            !error &&
            meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="border border-green-400 p-3 w-60"
              >
                <p>{meal?.strInstructions.slice(0, 100)}</p>

                <Image src={meal?.strMealThumb} width={500} height={500}/>
                {/* <img className="" src={meal?.strMealThumb} alt="" /> */}
              </div>
            ))}
          {meals == null && (
            <div>
              <div className="text-4xl text-red-500">.......no data found</div>
            </div>
          )}
          {error && (
            <div className="text-4xl text-red-500">{error}.......no data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meals;
