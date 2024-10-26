function GroceryItem (props){
    const {itemName,removeItem} = props

    
    return(<section id="grocery-item">
        <p>{itemName}</p>
        <button onClick={()=>{removeItem(itemName)}}>X</button>
    </section>)
}

export default GroceryItem