import React from 'react';
import { hot } from 'react-hot-loader';

import App from '../App';

class Field extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { val: 123 };
  }

  render() {
    const { val } = this.state;
    return (
      <div>
        <h3>This component use <span style={{ color: 'red' }}>internal state</span></h3>
        <input type="text" value={val} onInput={(e) => { this.setState({ val: e.target.value }); }}/>
        <h4>{val}</h4>
      </div>
    );
  }
}

export default hot(module)(Field);
