import React, { useState } from 'react';
import TodoList from "./TodoList";
import CategoryInput from "./CategoryInput";

function Main(props) {
    const [category, setCategory] = useState(false);

    function CreateCatButton(props) {
        if (category) {
            return (
                <CategoryInput setCat={setCategory}/>
            )
        }

        return (
            <button onClick={() => {setCategory(true)}}>
                New category
            </button>
        )
    }

    return (
        <main>
            <h2>Categories</h2>
            <CreateCatButton />
            <TodoList />
        </main>
    );
}

export default Main;