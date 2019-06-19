import React from 'react';
import parseCategories from '../helpers/parseCategories';

let list = [
    {
        id: 1,
        name: 'react',
        tasks: 'hooks',
        subCategory: [
            {
                id: 1.1,
                name: 'hooks',
                tasks: 'state hook',
                subCategory: [{
                    id: 1.12,
                    name: 'useState',
                    tasks: 'set custom state',
                    subCategory: [{
                        id: 1.121,
                        name: 'set custom state',
                        tasks: 'some task',
                        subCategory: []
                    }]
                }]
            },
            {
                id: 1.2,
                name: 'forms',
                tasks: 'controlled fields',
                subCategory: []

            }
        ]
    },
    {
        id: 2,
        name: 'redux',
        tasks: 'store',
        subCategory: [{
            id: 2.1,
            name: 'store',
            tasks: 'set store',
            subCategory: []
        }]
    },
    {
        id: 3,
        name: 'graphql',
        tasks: 'API',
        subCategory: []
    }
];

function CategoriesList() {
    return (
        <div>
            {parseCategories(list)}
        </div>
    );
}

export default CategoriesList;