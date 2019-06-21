import React from 'react';
import RenderList from './RenderList';

function CategoryList(props) {
    return (
        <RenderList categories={props.categories} updateCats={props.updateCats} state={props.state} setParentState={props.setParentState}/>
    )
}

export default CategoryList;