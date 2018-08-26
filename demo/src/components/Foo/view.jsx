import React from 'react';

export default class View extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Foo</h3>
        <input type="text" />
      </div>
    );
  }

  componentWillUnmount() {
    console.log('unmount foo');
  }
}
