import React from "react";
import AddCategory from "../components/AddCategory";

function parseCategories(categories, updateCategories, state, setParentState, list) {
    const categoriesArr = categories.map((element) => {

        let subMenu;

        if (element.subCategory.length  > 0) {
            subMenu = parseCategories(element.subCategory, updateCategories, state, setParentState, list)
        }

        return (
            <li key={ element.id }>
                <p>{ element.name }
                    <AddCategory
                        id={element.id}
                        element={element}
                        state={state}
                        setParentState={setParentState}
                        categories={list}
                        updateCats={updateCategories}
                    >
                        +
                    </AddCategory>
                </p>
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

export default parseCategories;
