import React, { Component } from 'react';

class List extends Component {
    render(){
        const listElements = this.props.data.map((item, index) => {
            return <li className="collection-item" key={item._id}>{item.title}</li>;
        });

        return (
            <ul className="collection">
                {listElements}
            </ul>
        );
    }
}

export default List;
