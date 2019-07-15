import React, {useState} from 'react';
import setNewCategoryObject from "../helpers/setNewCategoryObject";
import addSubCategory from "../helpers/addSubCategory";
import removeCategory from '../helpers/removeCategory';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import '../styles/styles.css'

function SubCategory(props) {
    const [state, setState] = useState(false);
    const [modalState, setModalState] = useState(false);
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
                            let id = catList.length + 1;
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

        <React.Fragment>
            <button onClick={() => {
                setValue('');
                setState(true);
            }}>+</button>
            <button className='delete' onClick={() => {
                setModalState(!modalState);
            }}>-</button>
            <Modal show={modalState}>
                <Modal.Header>
                    <Modal.Title>Delete this item?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={() => {
                        let catList = props.categories.slice();
                        removeCategory(catList, props.id);
                        props.updateCats(catList);
                        props.setParentState(!props.state);
                    }}>
                        Yes
                    </Button>
                    <Button variant="secondary"  onClick={() => {
                        setModalState(!modalState);
                    }}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>

    )
}

export default SubCategory;