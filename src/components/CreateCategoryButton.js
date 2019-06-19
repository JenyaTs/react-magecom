import React from 'react';
import CategoryInput from "./CategoryInput";

function CreateCatButton(props) {
    if (props.category) {
        return (
            <CategoryInput
                setCat={props.setCategory}
                catList={props.categoriesList}
                addParentCat={props.addNewParentCategory}
            />
        )
    }

    return (
        <button onClick={() => {props.setCategory(true)}}>
            New category
        </button>
    )
}

export default CreateCatButton;