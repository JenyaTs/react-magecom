import React from 'react';
import parseCategories from "../helpers/parseCategoriesArray";

function CategoryList(props) {
    return (
        <div>
            {parseCategories(props.categories, props.updateCats, props.state, props.setParentState, props.categories)}
        </div>
    )
}

export default CategoryList;