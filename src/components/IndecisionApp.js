import React from 'react'
import { Header } from './Header'
import { Action } from './Action'
import { Options } from './Options'
import { OptionModal } from './OptionModal'
import { AddOption } from './AddOption'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleClearOption = this.handleClearOption.bind(this)
        this.state = {
            options: ['a', 'b', 'c'],
            selectedOption: undefined
        }
    }
    componentDidMount() {
        const optionsJSON = localStorage.getItem('options')
        const options = JSON.parse(optionsJSON)
        this.setState(() => ({ options }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.options.length !== prevState.options.length) {
            const options = JSON.stringify(this.state.options)
            localStorage.setItem('options', options)
        }
    }
    handleClick() {
        const index = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[index]
        this.setState(() => ({ selectedOption: option }))
    }
    handleClearOption() {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleSubmit(option) {
        try {
            if (!option) {
                return 'Please enter a menu'
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This menu already exists.'
            }

            this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        } catch (e) {

        }

    }
    handleRemove() {
        this.setState(() => ({ options: [] }))
    }
    render() {
        const subtitle = 'What should I Eat Today?'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action handleClick={this.handleClick} />
                <Options
                    handleRemove={this.handleRemove}
                    options={this.state.options}
                />
                <AddOption handleSubmit={this.handleSubmit} />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearOption={this.handleClearOption}
                />
            </div>
        )
    }
}

module.exports = {
    IndecisionApp
}