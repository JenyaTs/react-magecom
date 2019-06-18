import React from 'react';

function CategoryInput(props) {


    return (
        <div>
            <input type="text"/>
            <button onClick={() => {props.setCat(false)}}>Add category</button>
        </div>
    );
}

export default CategoryInput;