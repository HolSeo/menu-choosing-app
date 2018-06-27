import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Menus</h3>
            <button 
                className="button button-link"
                onClick={props.handleRemove}
            >
                Remove All
            </button>
        </div>
        {props.options.map((option,index) => (
            <Option 
                key={option} 
                index={index + 1} 
                option={option}
                handleDeleteOption={props.handleDeleteOption}
            />)
        )}
    </div>
)

module.exports = {
    Options
}