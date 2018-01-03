import React, {Component} from 'react';

export default () => {
    return (
        <div className="search-mock">
            <label>
                <i className="fa fa-search" aria-hidden="true"></i>
            <input type="text" defaultValue="Search"/></label>
        </div>
    )
}

// .search-mock label {
//     position: relative;
//     padding-left: 40px;
// }

// .search-mock input {
//     height: 100%;
//     box-sizing: border-box;
//     border: 0;
//     color: #484848;
//     font-size: 13px;
//     font-weight: 600;
//     font-family: 'Nunito Sans', sans-serif;
// }

// .fa-search {
//     color: #A3A2A2;
//     position: absolute;
//     top: 2px;
//     left: 15px;
// }