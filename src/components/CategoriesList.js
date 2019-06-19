import React from 'react';
import parseCategories from '../helpers/parseCategories';

function CategoriesList(props) {
    return (
        <div>
            {parseCategories(props.list)}
        </div>
    );
}

export default CategoriesList;