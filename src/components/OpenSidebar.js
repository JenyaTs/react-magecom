import React, { useState } from 'react';

function OpenSidebar(props) {
    const [title, setTitle] = useState('Open sidebar');

    return (
        <div>
            <br/>
            <button onClick={() => {
                props.setState(!props.state);
                 if (props.state) {
                     setTitle('Open Sidebar');
                 }

                 if (!props.state) {
                     setTitle('Close sidebar');
                 }
            }}>
                {title}
            </button>
        </div>
    )
}

export default OpenSidebar;