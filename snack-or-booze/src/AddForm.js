import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewItemForm({addItem}) {

    const [form, updateForm] = useState({name: "", description:"", recipe:"",serve:""});
    const history = useHistory();
  
    function handleChange(e) {
      e.persist();
      updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      addItem({ [form.name]: form.description, [form.recipe]: form.serve });
      history.push("/");
    }
  
    const {hex, name} = form;
  
    return (
      <div className="NewItem">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Color name</label>
            <input
              name="name"
              id="name"
              placeholder="Enter color name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="description"
              name="description"
              id="description"
              onChange={handleChange}
              value={description}
            />
          </div>
          <div>
            <label htmlFor="recipe">Recipe</label>
            <input
              type="recipe"
              name="recipe"
              id="recipe"
              onChange={handleChange}
              value={recipe}
            />
          </div>
          <div>
            <label htmlFor="serve">Serve</label>
            <input
              type="serve"
              name="serve"
              id="serve"
              onChange={handleChange}
              value={serve}
            />
          </div>


          <input type="Submit" value="Add this Menu Item!" readOnly />
        </form>
      </div>
    );
  }
  
  export default NewItemForm;