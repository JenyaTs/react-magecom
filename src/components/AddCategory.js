import React, {useState} from 'react';
import setNewCategoryObject from "../helpers/setNewCategoryObject";
import addSubCategory from "../helpers/addSubCategory";

function AddCategory(props) {
    const [state, setState] = useState(false);
    const [value, setValue] = useState('');

    if(state) {
        return (
            <span>
                <input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <button onClick={() => {
                    if(value !== '') {
                        let catList = props.categories.slice();
                        
                        if (!props.id) {
                            let id = catList.length + 1
                            let newCat = setNewCategoryObject(id, value);
                        
                            catList.push(newCat);
                            
                            props.updateCats(catList);
                            setState(false);
                            props.setParentState(!props.state);
                        }

                        if (props.id) {
                            let id = `${props.element.id}.${props.element.subCategory.length + 1}`;
                            let newCat = setNewCategoryObject(id, value);

                            addSubCategory(catList, newCat, props);

                            props.updateCats(catList);
                            setState(false);
                            props.setParentState(!props.state);
                        }
                    }
                }}>Add category</button>
            </span>
        )
    }
    return (

        <button onClick={() => {
            setValue('');
            setState(true);
        }}>+</button>

    )
}

export default AddCategory;