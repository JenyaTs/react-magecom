import React, {useState} from 'react';
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';

function Sidebar(props) {
    const [state, setState] = useState(false);

    return (
        <div>
            <h2>
                New category
                <AddCategory
                    state={state}
                    setParentState={setState}
                    categories={props.categories}
                    updateCats={props.updateCats}
                />
            </h2>

            <CategoryList
                state={state}
                categories={props.categories}
                updateCats={props.updateCats}
                setParentState={setState}
            />
        </div>
    )
}

export default Sidebar;