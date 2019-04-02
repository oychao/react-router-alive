import React from 'react';
import invariant from 'tiny-invariant';
import warning from 'tiny-warning';
import { matchPath, __RouterContext as RouterContext } from 'react-router';

function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}

/**
 * The public API for matching a single path and rendering.
 */
class Route extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          invariant(context, 'You should not use <Route> outside a <Router>');

          const location = this.props.location || context.location;
          const match = this.props.computedMatch
            ? this.props.computedMatch // <Switch> already computed the match for us
            : this.props.path
              ? matchPath(location.pathname, this.props)
              : context.match;

          const props = { ...context, location, match };

          let { children, component, render } = this.props;

          // Preact uses an empty array as children by
          // default, so use null if that's the case.
          if (Array.isArray(children) && children.length === 0) {
            children = null;
          }

          if (typeof children === 'function') {
            children = children(props);

            if (children === undefined) {
              if (__DEV__) {
                const { path } = this.props;

                warning(
                  false,
                  'You returned `undefined` from the `children` function of ' +
                    `<Route${path ? ` path="${path}"` : ''}>, but you ` +
                    'should have returned a React element or `null`'
                );
              }

              children = null;
            }
          }

          return (
            <RouterContext.Provider value={props}>
              <div ref={this.wrapperRef} style={{ display: props.match ? 'block' : 'none' }} >
                {component ? React.createElement(component, props) : null}
              </div>
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}

// TODO
// updateDisplay() {
//   const componentInstance = this._reactInternalFiber.child;
//   const { match } = this.state;
//   if (
//     componentInstance &&
//     componentInstance.child &&
//     componentInstance.child.stateNode
//   ) {
//     warning(
//       componentInstance.child.sibling === null,
//       'You should not use fragment tag or (an array) as the root tag in your <Route component>; only the first child is effective'
//     );
//     if (match) {
//       componentInstance.child.stateNode.style.display = '';
//     } else {
//       componentInstance.child.stateNode.style.display = 'none';
//     }
//   }
// }

export default Route;