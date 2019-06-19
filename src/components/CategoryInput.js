import React from 'react';

function CategoryInput(props) {


    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type="text"/>
            <button onClick={() => {props.setCat(false)}}>Add category</button>
        </form>
    );
}

export default CategoryInput;