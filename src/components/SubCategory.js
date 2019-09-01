import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCategory, addSubCat, removeCategory } from "../actions/actions";
import setNewCategoryObject from "../helpers/setNewCategoryObject";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import '../styles/styles.css'

let id = 1;
function SubCategory(props) {

    const [state, setState] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

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
                        if (!props.id) {
                            dispatch(addCategory(setNewCategoryObject(`${id}`, value)));

                            setState(false);
                            id++;
                        }

                        if (props.id) {
                            dispatch(addSubCat({
                                data : setNewCategoryObject(`${props.element.id}.${props.element.subCategories.length + 1}`, value),
                                props: props
                            }));

                            setState(false);
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
                        let catList = [...props.categoriesArray.categories];
                        dispatch(removeCategory({data: catList, id: props.id}));
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