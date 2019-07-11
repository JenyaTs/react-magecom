import React from 'react';
import CategoryList from "./CategoryList";
import '../styles/styles.css'


function CategoryListWrapper(props) {
    return (
        <div className="pointer">
            {
                CategoryList(
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

export default CategoryListWrapper;