# react-router-alive

A keep-alive route component for [react-router][1].

[![Build Status](https://travis-ci.org/oychao/react-router-alive.svg?branch=master)](https://travis-ci.org/oychao/react-router-alive)

## Why you need it

You may don't want to unmount a route component when switching to another one.

## How it works

A `AliveRoute` component is provided to work in with [react-router][1], the target component will be mounted no matter the route is matched or not. However, the css `display` attribute of the target component will be set to `none` if route not matched, which means the `render` function in your target component can only return one root DOM element rather then a component or an array, otherwise it will not work properly.

Also, for now the package only support `"react": ">=16.0.0"` and `"react-router": ">=4.2.0"`.

The idea of setting `style={{display: 'none'}}` to realise this is from [here][2].

## How to use

The usage of `AliveRoute` is exactly the same with `Route` in [react-router][1], here is the [docs][3].

Moreover, a [demo project][4] is provided above or you can follow the steps below.

I assume you have a React project with `react-router` dependency installed, all you need to do is installing the dependency and using it in your project.

```javascript
yarn add react-router-alive
```

```javascript
import { Router, Link } from 'react-router-dom';
import { AliveRoute } from 'react-router-alive';

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
        <AliveRoute exact path="/foo" component={Foo} />
        <AliveRoute exact path="/bar" component={Bar} />
      </div>
    </Router>
  </div>
);
```

## License

[![](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)

[1]: https://github.com/ReactTraining/react-router
[2]: https://github.com/facebook/react/issues/12039#issuecomment-359801971
[3]: https://reacttraining.com/react-router/web/api/Route
[4]: https://github.com/oychao/react-router-alive/tree/master/demo
