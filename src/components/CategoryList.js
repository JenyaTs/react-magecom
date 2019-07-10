import React from 'react';
import ParseCategories from "./ParseCategoriesArray";


function CategoryList(props) {
    return (
        <div>
            {
                ParseCategories(
                    props.categories, 
                    props.updateCats, 
                    props.state, 
                    props.setParentState, 
                    props.categories, 
                    props.todos, 
                    props.updateTodos,
                    props.setToDoState
                )
            }
        </div>
    )
}

export default CategoryList;