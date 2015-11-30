## Sublime Text React Snippets

Sublime Text snippets for writing [React](http://facebook.github.io/react/) components.

These snippets (based on [sublime-react](https://github.com/reactjs/sublime-react)'s) use ES6 concise method definitions and only use semicolons where necessary.

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

#### dp → let {...} = this.props

```javascript
let {${1}} = this.props
```

#### ds → var {...} = this.state

```javascript
let {${1}} = this.state
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
let ${1} = React.createClass({
  render() {
    return <${3:div}${2: className="${1}"}>
      ${4}
    </${3:div}>
  }
})
```

#### rce → React.cloneElement(...)

```javascript
React.cloneElement(${1:this.props.children}, {${2}})
```

#### rcec → React.cloneElement(children, {...})

```javascript
React.cloneElement(this.props.children, {${1}})
```

#### rcf → component function

```javascript
let ${1} = ({${2}}) => <${4:div}${3: className="${1}"}>
  ${5}
</${4:div}>
```

#### rcm → component module

```javascript
import React from 'react'

let ${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}} = React.createClass({
  render() {
    return <${3:div}${2: className="${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}}"}>
      ${4}
    </${3:div}>
  }
})

export default ${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}}
```

#### rdn → findDOMNode(this.refs.)

```javascript
ReactDOM.findDOMNode(this.refs.${1})
```

#### rdr → ReactDOM.render()

```javascript
ReactDOM.render(<${1}/>, ${3:document.querySelector('#${2:app}')})
```

#### rec → extend Component

```javascript
class ${1} extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <${3:div}${2: className="${1}"}>
      ${4}
    </${3:div}>
  }
})
```

#### rem → extend Component module

```javascript
import React, {Component} from 'react'

export default class ${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}} extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <${3:div}${2: className="${1:${TM_FILENAME/(.?\w*)(?:\.\w+)*$/$1/g}}"}>
      ${4}
    </${3:div}>
  }
})
```

#### ren → render() { ... }

```javascript
render() {
  return <div>
    ${1}
  </div>
}
```

#### rrm → React render() module

```javascript
import React from 'react'
import {render} from 'react-dom'

import ${1} from '${2:./}${1}'

render(<${1}${3}/>, ${5:document.querySelector('#${4:app}')})
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
