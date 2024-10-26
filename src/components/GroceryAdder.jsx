import { useState } from "react"


function GroceryAdder(props){
    const {setGroceryItemsFunc} = props
    const [ newItem, setNewItem]= useState("")
    function handleSubmit(event){
        event.preventDefault()
        setGroceryItemsFunc((current)=>{
            return [newItem,...current]
        })
        setNewItem("")
    }

    return(
        <section id="grocery-adder">
            <form onSubmit={handleSubmit}>
                <input placeholder="Add Ingredient" type="text" value={newItem} onChange={(event)=>{
                    setNewItem(event.target.value)}}></input>
                <button type="submit">Add Item</button>
            </form>
        </section>
    )
}

export default GroceryAdder