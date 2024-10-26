import GroceryAdder from "./GroceryAdder"
import GroceryItem from "./GroceryItem"
import { useState } from "react"

function GroceryRecipeItem(props){
    const {recipeTitle, removeRecipe} = props

    //default values for list
    const [groceryItems, setGroceryItems] = useState([])

    function removeItem(theThingToRemove){
        const newGro = groceryItems.filter((item)=> item !== theThingToRemove)
        setGroceryItems(newGro)
    }
    

    return(<section id="recipe-item">
    <section id="recipe-item-header">
    <h2>{recipeTitle}</h2>
    <button id="recipe-item-remove" onClick={()=>{removeRecipe(recipeTitle)}}>X</button>
    </section>
    <GroceryAdder setGroceryItemsFunc={setGroceryItems}/>
    
    
    {groceryItems.map((item, index)=>{
        return <GroceryItem key ={item} itemName={item} removeItem={removeItem}/>
    })}
    
    </section>)
}

export default GroceryRecipeItem