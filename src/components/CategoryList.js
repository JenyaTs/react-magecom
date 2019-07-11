import React from "react";
import SubCategory from "./SubCategory";
import ListItem from "./ListItem";

function ParseCategories(categories, updateCategories, state, setParentState, list, todos, updateTodos, setToDoState) {
    const categoriesArr = categories.map((element) => {

        let subMenu;

        if (element.subCategory.length  > 0) {
            subMenu = ParseCategories(element.subCategory, updateCategories, state, setParentState, list, todos, updateTodos, setToDoState)
        }

        return (
            <li key={ element.id }>
                    <ListItem 
                        element={element} 
                        todos={todos} 
                        updateTodos={updateTodos}
                        state={state}
                        setParentState={setParentState}
                        setToDoState={setToDoState}
                    />
                    
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
