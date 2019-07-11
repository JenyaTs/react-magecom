import React from 'react';
import ParseCategories from "./ParseCategoriesArray";
import '../styles/styles.css'


function CategoryList(props) {
    return (
        <div className="pointer">
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