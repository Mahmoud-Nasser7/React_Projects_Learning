import {create} from "zustand"

type Recipe = {
    id: number , 
    name : string , 
    ingridiants : string[],
    instruction : string,
}

type AllRecipe = {
    recipes : Recipe[],
    addRecipe : (recipe :Recipe )=>void;
    removeRecipe : (id :number )=>void;
}

export const useStoreRecipe = create<AllRecipe>((set)=>({
    recipes : [],
    addRecipe : (recipe)=>set((state)=>({recipes:[...state.recipes , recipe]})),
    removeRecipe : (id)=>set((state)=>({recipes : state.recipes.filter(item=>item.id !== id)} )),


}))


