import {create } from "zustand"

interface Meals {
    id:string,
    strMeal : string,
    strMealThumb : string
}

interface StoreState {
    meals : Meals[],
    searchQuery : string,
    setMeals : (meals : Meals[])=>void,
    setSearchQuery : (query:string)=>void
}


export const useStore = create<StoreState>((set)=>({
        meals : [],
        searchQuery : "",
        setMeals:(meals : Meals[])=>set({meals}),
        setSearchQuery : (query)=>set({searchQuery : query})


}))