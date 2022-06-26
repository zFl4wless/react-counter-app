import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div className='py-2 text-center'>
                <button className='btn btn-primary'>+</button>
                <h1>{this.state.count}</h1>
                <button className='btn btn-danger'>-</button>
            </div>
        );
    }
}

export default Counter;
