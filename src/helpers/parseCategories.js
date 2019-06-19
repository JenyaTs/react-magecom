import React from 'react';

function parseCategories(categories) {
    const categoriesArr = categories.map((element) => {

        let subMenu;

        if (element.subCategory.length  > 0) {
            subMenu = parseCategories(element.subCategory)
        }

        return (
            <li key={ element.id }>
                <p>{ element.name } <button>+</button></p>
                { subMenu }
            </li>
        );

    });

    return (
        <ul>
            {categoriesArr}
        </ul>
    )
}

export default parseCategories;