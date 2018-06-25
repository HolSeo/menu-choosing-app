class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.state = {
            options: ['a', 'b', 'c']
        }
    }
    handleClick () {
        const index = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[index]
        alert(option)
    }
    handleSubmit (option) {
        try {
            console.log(option)
            if (!option) {
                return 'Please enter a menu'
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This menu already exists.'
            }

            this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        } catch (e) {

        }

    }
    handleRemove () {
        this.setState(() => ({ options: [] }))
    }
    render() {
        const subtitle = 'What should I Eat Today?'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action handleClick={this.handleClick}/>
                <Options 
                    handleRemove={this.handleRemove}
                    options={this.state.options}
                />
                <AddOption handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>I shall Choose!</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemove}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} option={option}/>)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.option}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleSubmit(option)
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Food</button>
                </form>
            </div>
        )
    }
}

Header.defaultProps = {
    title: 'Menu Decision App'
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))