import React from 'react'
import {Option} from './Option'

const Options = (props) => (
    <div>
        <button onClick={props.handleRemove}>Remove All</button>
        {props.options.map((option) => <Option key={option} option={option} />)}
    </div>
)

module.exports = {
    Options
}