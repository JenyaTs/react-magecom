import React from 'react';
import CategoryList from "./CategoryList";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import '../styles/styles.css'

function CategoryListWrapper(props) {
    return (
        <Router className="pointer">
            {
                CategoryList(
                    props.categories, 
                    props.updateCats, 
                    props.state, 
                    props.setParentState, 
                    props.categories, 
                    props.todos, 
                    props.updateTodos,
                    props.setToDoState,
                )
            }
        </Router>
    )
}

export default CategoryListWrapper;