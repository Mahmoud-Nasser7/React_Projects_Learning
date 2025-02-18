import { useState } from "react";
import { useStoreRecipe } from "./Store";
type Recipe = {
  id: number;
  name: string;
  ingridiants: string[];
  instruction: string;
};
const Recipe = () => {
  const { recipes, addRecipe, removeRecipe } = useStoreRecipe();
  const [name, setName] = useState<string>("");
  const [ingridiants, setIngridiants] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [editRecipe, setEditRecipe] = useState<null | Recipe>(null);

  function handleAdd() {
    if (
      ingridiants.trim() === "" ||
      name.trim() === "" ||
      instruction.trim() === ""
    ) {
      return;
    }
    addRecipe({
      id: Date.now(),
      name,
      instruction,
      ingridiants: ingridiants.split(", ").map((item) => item.trim()),
    });
    setName("");
    setIngridiants("");
    setInstruction("");
  }

  function handelDelete(id:number) {
    removeRecipe(id)
  }

  function handelEdit(recipe:Recipe) {
    setEditRecipe(recipe)
    setName(recipe.name)
    setInstruction(recipe.instruction)
    setIngridiants(recipe.ingridiants.join(", "))
  }

  function handelUpdate() {
    if (
        ingridiants.trim() === "" ||
        name.trim() === "" ||
        instruction.trim() === ""
      ) {
        return;
      }
      if(editRecipe){
        removeRecipe(editRecipe.id);
        addRecipe({
          id: Date.now(),
          name,
          instruction,
          ingridiants: ingridiants.split(", ").map((item) => item.trim()),
        });
        setEditRecipe(null)
      }
      setName("");
      setIngridiants("");
      setInstruction("");

  }

  function handelCancel() {
    setEditRecipe(null)
    setName("");
    setIngridiants("");
    setInstruction("");
    
  }
  return (
    <div className="parent min-h-screen flex items-center justify-center bg-green-100 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe Book
        </h2>
        <div className="theForm space-y-4 mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name Of Recipe"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={ingridiants}
            onChange={(e) => setIngridiants(e.target.value)}
            placeholder="ingridiants..."
          />
          <textarea
            className="w-full px-4 py-2 border rounded-lg border-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder="instruction..."
          />

          <div className="flex justify-between">
            {editRecipe ? (
              <>
                <button onClick={handelUpdate} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 ">
                  Update
                </button>
                <button onClick={handelCancel} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 ">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAdd}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 "
                >
                  Add
                </button>
              </>
            )}
          </div>

          <ul className="space-y-4">
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <h2 className="text-xl font-semibold text-green-800 mb-2 ">
                  {recipe.name}
                </h2>
                <p className=" text-gray-700 mb-2 ">
                  <strong>Ingrediants : </strong>{" "}
                  {recipe.ingridiants.join(", ")}
                </p>

                <div className="flex justify-between items-center">
                  <button onClick={()=>handelEdit(recipe)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                    Edit
                  </button>
                  <button onClick={()=>handelDelete(recipe.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
