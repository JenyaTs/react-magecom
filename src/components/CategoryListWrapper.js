import React from 'react';
import CategoryList from "./CategoryList";

import '../styles/styles.css'
function CategoryListWrapper(props) {
    return (
        <div className="pointer">
            {
                CategoryList(
                    props.categoriesArray,
                    props.updateCats, 
                    props.state,
                    props.setParentState, 
                    props.categoriesArray,
                    props.todos, 
                    props.updateTodos,
                    props.setToDoState,
                    props.match
                )
            }
        </div>
    )
}

export default CategoryListWrapper;