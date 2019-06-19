import React, { useState } from 'react';
import CategoriesList from "./CategoriesList";
import CategoryInput from "./CategoryInput";

function Main(props) {
    const [parentCategoryInput, setParentCategoryInput] = useState(false);

    function CreateCatButton() {
        if (parentCategoryInput) {
            return (
                <CategoryInput setCat={setParentCategoryInput}/>
            )
        }

        return (
            <button onClick={() => {setParentCategoryInput(true)}}>
                New category
            </button>
        )
    }

    return (
        <main>
            <h2>Categories</h2>
            <CreateCatButton />
            <CategoriesList list={props.categories}/>
        </main>
    );
}

export default Main;