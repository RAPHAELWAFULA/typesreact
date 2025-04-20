// Import React and Component for class-based components
import React, { Component } from 'react';

// 1. Define the state type
type CounterState = {
  count: number; // We only have one piece of state: a count number
};

// 2. Define the class component and specify the types
// No props, so we use {} for props
class Counter extends Component<{}, CounterState> {
  // 3. Initialize state with correct type
  state: CounterState = {
    count: 0,
  };

  // 4. Arrow function ensures 'this' is bound correctly
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // 5. Render method returns JSX
  render(): React.ReactNode {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
