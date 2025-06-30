import React from 'react';
import ReactDOM from 'react-dom';

const mycode = <food type="continental" />;

class food extends React.Component {
    render() {
        return <h2>I am {this.props.type} type Food. People love me</h2>
    }
}
ReactDOM.render(mycode, document.getElementById('root'));