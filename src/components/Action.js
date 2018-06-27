import React from 'react'

const Action = (props) => (
    <div>
        <button 
            className="big-button"
            disabled={!props.hasOptions}
            onClick={props.handleClick}
        >
            I shall Choose!
        </button>
    </div>
)

module.exports = {
    Action
}