import React, { Component } from 'react'

class HomeContainer extends Component {

    state = { param: '' }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.param);
    }

    render () {
        const { param } = this.state;

        return ( 
            <div className="ui container" style={{margin: '10px 0 10px 0'}}>
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Ingresa el número de unidad</label>
                            <input 
                                type="text" 
                                value={this.state.param}
                                onChange={e => this.setState({ param: e.target.value })} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomeContainer
