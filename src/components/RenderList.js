import React from 'react';
import parseCategories from "../helpers/parseCategoriesArray";

function RenderList(props) {
    console.log(props);
    return (
        <div>
            {parseCategories(props.categories, props.updateCats, props.state, props.setParentState, props.categories)}
        </div>
    )
}

export default RenderList;