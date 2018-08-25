import React from 'react';

export default class View extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Bar</h3>
        <input type="number" />
      </div>
    );
  }

  componentWillUnmount() {
    console.log('unmount bar');
  }
}
