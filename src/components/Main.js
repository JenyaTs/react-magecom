import React, { useState } from 'react';
import CategoriesList from "./CategoriesList";
import CreateCatButton from "./CreateCategoryButton";

function Main(props) {
    const [parentCategoryInput, setParentCategoryInput] = useState(false);

    return (
        <main>
            <h2>Categories</h2>
            <CreateCatButton
                category={parentCategoryInput}
                setCategory={setParentCategoryInput}
                categoriesList={props.categories}
                addNewParentCategory={props.changeCategories}
            />
            <CategoriesList list={props.categories}/>
        </main>
    );
}

export default Main;