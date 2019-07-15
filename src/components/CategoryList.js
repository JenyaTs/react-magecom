import React from "react";
import SubCategory from "./SubCategory";
import CatListItem from "./CatListItem";
import { Link } from 'react-router-dom'

function ParseCategories(categories, updateCategories, state, setParentState, list, todos, updateTodos, setToDoState) {
    const categoriesArr = categories.map((element) => {

        let subMenu;

        if (element.subCategory.length  > 0) {
            subMenu = ParseCategories(element.subCategory, updateCategories, state, setParentState, list, todos, updateTodos, setToDoState)
        }

        return (
            <li key={ element.id }>
                <Link to={`${element.id}`}>
                    <CatListItem
                        element={element}
                        todos={todos}
                        updateTodos={updateTodos}
                        state={state}
                        setParentState={setParentState}
                        setToDoState={setToDoState}
                    />
                </Link>
                <SubCategory
                    id={element.id}
                    element={element}
                    state={state}
                    setParentState={setParentState}
                    categories={list}
                    updateCats={updateCategories}
                >
                    +
                </SubCategory>
                { subMenu }
            </li>
        );

    });

    return (
        <ul>
            {categoriesArr}
        </ul>
    )
}

export default ParseCategories;
