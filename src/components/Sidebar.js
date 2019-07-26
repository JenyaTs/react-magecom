import React from "react";
import CategoryAdder from './CategoryAdder';
import CategoryListWrapper from "./CategoryListWrapper";
import { sidebarConnector } from '../connector/connector';

const ConnectedCategoriesList = sidebarConnector(CategoryListWrapper);

function Sidebar(props) {
    return (
        <aside className="sidebar">
            <div className="header">Sidebar</div>
            <CategoryAdder
                todos={props.todos}
                updateTodos={props.updateTodos}
                categories={props.categories}
                updateCats={props.updateCats}
                setToDoState={props.setToDoState}
                component={ConnectedCategoriesList}
                match={props.match}
            />
        </aside>
    )
}

export default Sidebar;