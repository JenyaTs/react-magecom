import React, { useState } from 'react';

function CategoryInput(props) {
    const [value, setValue] = useState('');

    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button
                onClick={
                    () => {
                        let newCat = {
                            id: Math.floor(Math.random() * 100),
                            name: value,
                            tasks: '',
                            subCategory: []
                        };
                        let catList = props.catList;
                        catList.push(newCat);
                        props.addParentCat(catList);
                        props.setCat(false);
                    }
                }
            >
                Add category
            </button>
        </form>
    );
}

export default CategoryInput;