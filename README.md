# react-router-alive

A keep-alive route component for [react-router][1].

[![Build Status](https://travis-ci.org/oychao/react-router-alive.svg?branch=master)](https://travis-ci.org/oychao/react-router-alive) [![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

## Why you need it

You may don't want to unmount a route component when switching to another one.

## How it works

A `AliveRoute` component is provided to work within [react-router][1], every target component of `AliveRoute` will be wrapped in a `div` element respectively, **which means your dom structure will be changed if you use this repository, and react-native is not supported for the moment**.

Despite the route being matched or not, all target components will be mounted, of which the css attribute `display` of all wrapper `div`s are set to `none` except the matched route.

For now the package only support `"react": ">=16.8.4"` and `"react-router": ">=5.0.0"`.

The idea of setting `style={{display: 'none'}}` to realise this is from [here][2].

## How to use

`children`(wrapped JSX elements) and `render` attribute are not supported in `AliveRoute`, in which it is recommended to use `component` attribute to set a target route component, other basic usage of `AliveRoute` is almost the same with `Route` in [react-router][1], here is the [docs][3].

A [demo project][4] is provided above or you can follow the steps below.

```javascript
yarn add react-router-alive
```

```jsx
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

[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

[1]: https://github.com/ReactTraining/react-router
[2]: https://github.com/facebook/react/issues/12039#issuecomment-359801971
[3]: https://reacttraining.com/react-router/web/api/Route
[4]: https://github.com/oychao/react-router-alive/tree/master/demo
