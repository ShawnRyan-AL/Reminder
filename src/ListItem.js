import React from 'react';
import './App.css';
import statusConstants from './constants/StatusConstants';

function ListItem({itemText, index, listType, onInProgressClick, onCompleteClick}) {

    const buttonVar = listType !== statusConstants.COMPLETE;

    return (
        <div className='list-item'>
            <span className='list-item__text'>
                {itemText}
            </span>
            {buttonVar && <button className='list-item__button' onClick={() => onInProgressClick(itemText, index, listType)}> > </button>}
        </div>
    );
}

export default ListItem;
