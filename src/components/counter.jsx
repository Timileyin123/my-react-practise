import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div>
                
                <span className ={this.getBtnClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-primary btn-lg'>Increment </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-lg m-2">Delete</button>
            </div>
        );
    }
    getBtnClasses() {
        let classes = 'btn m-2 btn-';
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' :value;
    }
}
 
export default Counter ;