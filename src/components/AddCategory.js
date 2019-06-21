import React, {useState} from 'react';

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
                        let newCat = {
                            id: Math.round(Math.random() * 10000),
                            name: value,
                            tasks: [],
                            subCategory: []
                        };

                        if (!props.id) {
                            let catList = props.categories;
                            catList.push(newCat);
                            props.updateCats(catList);
                            setState(false);


                            if (props.state === false) {
                                props.setParentState(true);
                            }

                            if (props.state === true) {
                                props.setParentState(false);
                            }
                        }

                        if (props.id) {
                            let catList = props.categories;
                            let newCat = {
                                id: Math.round(Math.random() * 10000),
                                name: value,
                                tasks: [],
                                subCategory: []
                            };

                            function parse(array) {
                                array.forEach((element) => {
                                    if(element.id === props.id) {
                                        element.subCategory.push(newCat);
                                    }

                                    if (element.subCategory.length  > 0) {
                                        parse(element.subCategory)
                                    }
                                });
                            }

                            parse(catList);

                            props.updateCats(catList);
                            setState(false);

                            if (props.state === false) {
                                props.setParentState(true);
                            }

                            if (props.state === true) {
                                props.setParentState(false);
                            }
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