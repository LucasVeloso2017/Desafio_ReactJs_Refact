import React from 'react';
import { Link } from 'react-router-dom'

import './index.css'
function Side({title,link}) {
    return(
        <>
        <aside>
            <ul>
                <li>GoStack</li>
                <li>RepoMaker</li>
                <li>
                    <Link to={link}>
                        <button>{title}</button>
                    </Link>
                </li>
            </ul>
        </aside>
        </>
    );


}

export default Side;