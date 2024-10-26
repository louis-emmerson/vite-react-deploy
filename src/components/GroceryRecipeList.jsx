import GroceryRecipeItem from "./GroceryRecipeItem"
import {useState} from "react"

function GroceryRecipeList () {

    const [addRecipe, setAddRecipe] = useState(["Pizza", "Pasta"])

    const [addRecipeInput, setAddRecipeInput] = useState("")

    function recipeHandler(event){
        event.preventDefault()
        setAddRecipe((currRecipe)=>{
            const newRecipe = [...currRecipe,addRecipeInput]
            return newRecipe
        })
        setAddRecipeInput("")
    }

    function removeRecipe(recipeToRemove){
        const newRecipeArray = addRecipe.filter((recipe)=> recipe !== recipeToRemove)
        setAddRecipe(newRecipeArray)

    }

    return (<section id="grocery-list">
        <form onSubmit={recipeHandler}>
          <input type="text" value={addRecipeInput} onChange={(event)=>{setAddRecipeInput(event.target.value)}}placeholder="Add a new Recipe"></input>
          <button>Add Recipe</button>  
        </form>
        { addRecipe.map((item)=>{
            return(<GroceryRecipeItem recipeTitle={item} removeRecipe={removeRecipe}/>)
        })
        
            }
    </section>)
}

export default GroceryRecipeList