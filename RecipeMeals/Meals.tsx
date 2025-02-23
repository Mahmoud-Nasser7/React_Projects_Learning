import { useStore } from "./Store";
import { useEffect } from "react";
const Meals = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await res.json();
        setMeals(data.meals);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchMeals();
  }, [setMeals]);

  const filterMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p- bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-teal-600">Seafood Recipes</h1>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-80 mb-4 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
      />

        <div>
    {filterMeals.length > 0 ? (
        filterMeals.map((meal)=>(
            <div key={meal.id} className="bg-white mb-4 shadow-md rounded-lg p-4 flex flex-col items-center">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-xl font-semibold text-teal-700 my-2">{meal.strMeal}</h2>
            </div>
        ))

    ):("")}

        </div>


    </div>
  );
};

export default Meals;
{
  /* <div>
{filteredMeals.length > 0 ? (
  filteredMeals.map((meal) => (
    <div key={meal.idMeal}>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  ))
) : (
  <p>No meals found</p>
)}
</div> */
}
