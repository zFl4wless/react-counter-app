import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div className="py-2 text-center">
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-primary"
                >
                    +
                </button>
                <h1>{this.state.count}</h1>
                <button
                    onClick={this.handleDecrement}
                    className="btn btn-danger"
                >
                    -
                </button>
            </div>
        );
    }
}

export default Counter;
