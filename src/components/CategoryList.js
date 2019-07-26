import React from "react";
import SubCategory from "./SubCategory";
import CatListItem from "./CatListItem";
import { Link } from 'react-router-dom';
import { sidebarConnector } from '../connector/connector';

const ConnectedSubcategory = sidebarConnector(SubCategory);

function ParseCategories(categories, updateCategories, state, setParentState, list, todos, updateTodos, setToDoState, match) {
    const categoriesArr = categories.map((element) => {
        let subMenu;

        if (element.subCategories && element.subCategories.length  > 0) {
            subMenu = ParseCategories(element.subCategories, updateCategories, state, setParentState, list, todos, updateTodos, setToDoState, match)
        }

        return (
            <li key={ element.id }>
                <Link to={`${match.url}/${element.id}`}>
                    <CatListItem
                        element={element}
                        todos={todos}
                        updateTodos={updateTodos}
                        state={state}
                        setParentState={setParentState}
                        setToDoState={setToDoState}
                    />
                </Link>
                <ConnectedSubcategory
                    id={element.id}
                    element={element}
                    state={state}
                    setParentState={setParentState}
                    categories={list}
                    updateCats={updateCategories}
                >
                    +
                </ConnectedSubcategory>
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
