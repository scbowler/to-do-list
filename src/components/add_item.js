import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleAddingItem = (event) => {
        event.preventDefault();

        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }

    render(){
        return (
            <form onSubmit={this.handleAddingItem}>
                <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input 
                            type="text"
                            value={this.state.title}
                            onChange={(e) => { this.setState({title: e.target.value}) }}
                        />
                        <label>Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input 
                            type="text"
                            value={this.state.details}
                            onChange={ e => this.setState({details: e.target.value}) }
                        />
                        <label>Details</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2 right-align">
                        <button className="btn red darken-2">Add Item</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddItem;
