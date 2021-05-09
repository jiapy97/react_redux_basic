import React, { Component } from 'react';

class Counter extends Component {

    componentDidMount() {
        console.log(this.props);
    }
    Increment = () => {
        const {value} = this.selectNumber;
        this.props.increment(value * 1);
    };
    Decrement = () => {
        const {value} = this.selectNumber;
        this.props.decrement(value * 1);
    }
    IncrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = this.props.count;
        if (count % 2 !== 0) {
            this.props.increment(value * 1);
        }
    }
    IncrementAsync = () => {
        const {value} = this.selectNumber;
        this.props.incrementAsync(value * 1,1000);
    }
    render() {
        const count = this.props.count;
        return (
            <div>
                <h1>当前求和为：{count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.Increment}>+</button>&nbsp;
                <button onClick={this.Decrement}>-</button>&nbsp;
                <button onClick={this.IncrementIfOdd}>奇数则+</button>&nbsp;
                <button onClick={this.IncrementAsync}>异步+</button>
            </div>
        );
    }
}

export default Counter;