## Sublime Text React Snippets

Sublime Text snippets for writing [React](http://facebook.github.io/react/)
components.

These snippets (based on [sublime-react](https://github.com/reactjs/sublime-react)'s)
use ES6 concise method definitions and only use semicolons where necessary.

### Snippets

#### cct → childContextTypes: { ... }

```javascript
childContextTypes: {
  ${1}: React.PropTypes.${2:string}
},
```

#### cdm → componentDidMount() { ... }

```javascript
componentDidMount() {
  ${1}
},
```

#### cdup → componentDidUpdate() { ... }

```javascript
componentDidUpdate(prevProps, prevState) {
  ${1}
},
```

#### class → className

```javascript
className=${2:"${1}"}
```

#### cts → contextTypes: { ... }

```javascript
contextTypes: {
  ${1}: React.PropTypes.${2:string}
},
```

#### cwm → componentWillMount() { ... }

```javascript
componentWillMount() {
  ${1}
},
```

#### cwr → componentWillReceiveProps() { ... }

```javascript
componentWillReceiveProps(nextProps) {
  ${1}
},
```

#### cwu → componentWillUpdate() { ... }

```javascript
componentWillUpdate(nextProps, nextState) {
  ${1}
},
```

#### cwun → componentWillUnmount() { ... }

```javascript
componentWillUnmount() {
  ${1}
},
```

#### dp → var {...} = this.props

```javascript
var {${1}} = this.props
```

#### ds → var {...} = this.state

```javascript
var {${1}} = this.state
```

#### dsi → dangerouslySetInnerHTML

```javascript
dangerouslySetInnerHTML={${3:{__html: ${2:'${1}'}}}}
```

#### fdn → findDOMNode(...)

```javascript
ReactDOM.findDOMNode(${1})
```

#### fup → forceUpdate(...)

```javascript
this.forceUpdate(${1})
```

#### gcc → getChildContext() { ... }

```javascript
getChildContext() {
  return {
    ${1}: ${2}
  }
},
```

#### gdp → getDefaultProps() { ... }

```javascript
getDefaultProps() {
  return {
    ${1}: ${2}
  }
},
```

#### gis → getInitialState() { ... }

```javascript
getInitialState() {
  return {
    ${1}: ${2}
  }
},
```

#### ism → isMounted()

```javascript
this.isMounted()
```

#### props → this.props.

```javascript
this.props.${1}
```

#### pt → propType

```javascript
${1}: React.PropTypes.${2:string}
```

#### pts → propTypes: { ... }

```javascript
propTypes: {
  ${1}: React.PropTypes.${2:string}
},
```

#### rcc → component

```javascript
var ${1} = React.createClass({
  render() {
    return <${3:div}${2: className="${1}"}>
      ${4}
    </${3:div}>
  }
})
```

#### rcf → component function

```javascript
var ${1} = ({${2}}) => <${4:div}${3: className="${1}"}>
  ${5}
</${4:div}>
```

#### rcm → component module

```javascript
var React = require('react')

var ${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}} = React.createClass({
  render() {
    return <${3:div}${2: className="${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}}"}>
      ${4}
    </${3:div}>
  }
})

module.exports = ${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}}
```

#### rdn → findDOMNode(this.refs.)

```javascript
ReactDOM.findDOMNode(this.refs.${1})
```

#### rdr → ReactDOM.render()

```javascript
ReactDOM.render(<${1}/>, ${3:document.querySelector('#${2:app}')})
```

#### rdr → React.cloneElement(...)

```javascript
React.cloneElement(${1:this.props.children}, {${2}})
```

#### rdrm → ReactDOM.render() module

```javascript
var React = require('react')
var ReactDOM = require('react-dom')

var ${1} = require('${2:./}${1}')

ReactDOM.render(<${1}${3}/>, ${5:document.querySelector('${4:#app}')})
```

#### ren → render() { ... }

```javascript
render() {
  return <div>
    ${1}
  </div>
}
```

#### scu → shouldComponentUpdate() { ... }

```javascript
shouldComponentUpdate(nextProps, nextState) {
  ${1}
},
```

#### sst → this.setState({ ... })

```javascript
this.setState({
  ${1}: ${2}
})
```

#### state → this.state.

```javascript
this.state.${1}
```

### MIT Licensed