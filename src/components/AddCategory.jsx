import { useState } from "react";

const AddCategory = ({onAddCategory}) => {

    const [InputValue, setInputValue] = useState("");


    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        if ( InputValue.trim().length <=1 ) return;
        onAddCategory(InputValue)
        setInputValue("")
    }
    return (
    <form onSubmit={onSubmit} >

        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value = {InputValue}
            onChange={onInputChange }
            />

    </form>

     );
}
 
export default AddCategory;