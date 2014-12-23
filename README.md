## Sublime Text React Snippets

Sublime Text snippets for writing [React](http://facebook.github.io/react/)
components.

These snippets (based on [sublime-react](https://github.com/reactjs/sublime-react)'s)
use ES6 concise method definitions and only use semicolons where necessary.

### Snippets

#### cct -- childContextTypes: { ... }

```javascript
childContextTypes: {
  ${1}: React.PropTypes.${2:string}
},
```

#### cdm -- componentDidMount() { ... }

```javascript
componentDidMount() {
  ${1}
},
```

#### cdup -- componentDidUpdate() { ... }

```javascript
componentDidUpdate(prevProps, prevState) {
  ${1}
},
```

#### class -- className

```javascript
className=${2:"${1}"}
```

#### cs -- var cx = React.addons.classSet

```javascript
var cx = React.addons.classSet
```

#### cts -- contextTypes: { ... }

```javascript
contextTypes: {
  ${1}: React.PropTypes.${2:string}
},
```

#### cwm -- componentWillMount() { ... }

```javascript
componentWillMount() {
  ${1}
},
```

#### cwr -- componentWillReceiveProps() { ... }

```javascript
componentWillReceiveProps(nextProps) {
  ${1}
},
```

#### cwu -- componentWillUpdate() { ... }

```javascript
componentWillUpdate(nextProps, nextState) {
  ${1}
},
```

#### cwun -- componentWillUnmount() { ... }

```javascript
componentWillUnmount() {
  ${1}
},
```

#### cx -- cx({ ... })

```javascript
cx({
  $1: $2
})
```

#### dsi -- dangerouslySetInnerHTML

```javascript
dangerouslySetInnerHTML={${3:{__html: ${2:'${1}'}}}
```

#### fup -- forceUpdate(...)

```javascript
this.forceUpdate(${1:callback})
```

#### gcc -- getChildContext() { ... }

```javascript
getChildContext() {
  return {
    ${1}: ${2}
  }
},
```

#### gdn -- getDOMNode()

```javascript
getDOMNode()
```

#### gdp -- getDefaultProps() { ... }

```javascript
getDefaultProps() {
  return {
    ${1}: ${2}
  }
},
```

#### gis -- getInitialState() { ... }

```javascript
getInitialState() {
  return {
    ${1}: ${2}
  }
},
```

#### ism -- isMounted()

```javascript
this.isMounted()
```

#### props -- this.props.

```javascript
this.props.${1}
```

#### pt -- propType

```javascript
${1}: React.PropTypes.${2:string}
```

#### pts -- propTypes: { ... }

```javascript
propTypes: {
  ${1}: React.PropTypes.${2:string}
},
```

#### rcc -- component

```javascript
var ${1} = React.createClass({
  render() {
    return <div${2: className="${1}"}>
      ${3}
    </div>
  }
})
```

#### rcm -- component module

```javascript
'use strict';

var React = require('react')

var ${1} = React.createClass({
  render() {
    return <div${2: className="${1}"}>
      ${3}
    </div>
  }
})

module.exports = ${1}
```

#### rdn -- var = this.refs.getDOMNode()

```javascript
var ${1} = this.refs.${1}.getDOMNode()
```

#### ren -- render() { ... }

```javascript
render() {
  return <div>
    ${1}
  </div>
}
```

#### rr -- React.render()}

```javascript
React.render(${1}, ${2:document.${3:getElementById('${4}')}})
```

#### scu -- shouldComponentUpdate() { ... }

```javascript
shouldComponentUpdate(nextProps, nextState) {
  ${1}
},
```

#### sst -- this.setState({ ... })

```javascript
this.setState({
  ${1}: ${2}
})
```

#### state -- this.state.

```javascript
this.state.${1}
```

### MIT Licensed