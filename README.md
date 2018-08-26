# react-router-alive

A keep-alive route component for react-router.

[![Build Status](https://travis-ci.org/oychao/react-router-alive.svg?branch=master)](https://travis-ci.org/oychao/react-router-alive)

## Why you need it

You may don't want to unmount a route component when switching to another one.

## How it works

A `AliveRoute` component is provided to work in with [react-router][1], the component will be mounted despite of the route is matched or not.

However, the css `display` attribute of the target component will be set to `none` if route not matched, which means the `render` function in your target component can only return one root DOM element rather then a component, otherwise it will not work properly.

The idea of setting `style={{display: 'none'}}` to realise this is from [Dan Abramov][2].

## How to use

Check the [demo project][3] or follow the steps below.

I assume you have a React project with `react-router` dependency installed.

Install the dependency.

```javascript
yarn add react-router-alive
```

Use the component in your project.

```javascript
import { Route, Link } from 'react-router-dom';
import AliveRoute as Route from 'react-router-alive';

import Foo from './Foo';
import Bar from './Bar';

// ...

export default () => (
  <div className="app">
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/foo">Foo</Link>
          </li>
          <li>
            <Link to="/bar">Bar</Link>
          </li>
          <li />
        </ul>
        <Route exact path="/foo" component={Foo} />
        <Route exact path="/bar" component={Bar} />
      </div>
    </Router>
  </div>
);
```

## License

[![](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)

[1]: https://github.com/ReactTraining/react-router
[2]: https://github.com/facebook/react/issues/12039#issuecomment-359801971
[3]: https://github.com/oychao/react-router-alive/tree/master/demo
