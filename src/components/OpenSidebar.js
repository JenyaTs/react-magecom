import React  from 'react';
import { Link, Switch, Route } from 'react-router-dom'

function OpenSidebarLink() {
        return (
            <div>
                <br/>
                <Link to='/categories'>
                    <button onClick={() => {
                    }}>
                        Open sidebar
                    </button>
                </Link>
            </div>
        )
}

function CloseSidebarLink() {
    return (
        <div>
            <br/>
            <Link to='/'>
                <button onClick={() => {
                }}>
                    Close sidebar
                </button>
            </Link>
        </div>
    )
}

function OpenSidebar() {
    return (
        <Switch>
            <Route
                exact path="/"
                render={(props) =>
                    <OpenSidebarLink
                        {...props}
                    />
                }
            />
            <Route
                path="/categories"
                render={(props) =>
                    <CloseSidebarLink
                        {...props}
                    />
                }
            />
        </Switch>
    )
}

export default OpenSidebar;