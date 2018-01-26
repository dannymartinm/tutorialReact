import React, { Component } from "react";
import ReactDOM from "react-dom";

//import PropTypes from "prop-types";

/* class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state txt"
      //     cat: 0
    };
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    // let txt = this.props.txt;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Widget update={this.update.bind(this)} />

        <Widget update={this.update.bind(this)} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

const Widget = props => <input type="text" onChange={props.update} />;

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
};

App.defaultProps = {
  txt: "this is the default text"
};

//const App = () => <h1>Hello stateless</h1>
*/

/*
class App extends Component {
  render() {
    return (
      <Button>
        I <Heart />React
      </Button>
    );
  }
}

const Button = props => <button>{props.children}</button>;

class Heart extends Component {
  render() {
    return <span>&hearts;</span>;
  }
}*/
/*
class App extends Component {
  render() {
    return <Title text="123456" />;
  }
}

const Title = props => <h1>Title: {props.text}</h1>;

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`);
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`);
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = { currentEvent: "---" };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({ currentEvent: e.type });
  }
  render() {
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          cols="30"
          rows="10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = { a: "" };
  }
  update() {
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    });
  }
  render() {
    return (
      <div>
        <Input
          ref={component => (this.a = component)}
          type="text"
          onChange={this.update.bind(this)}
        />
        {this.state.a}
        <hr />
        <input ref="b" type="text" onChange={this.update.bind(this)} />
        {this.state.b}
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return (
      <div>
        <input ref="input" type="text" onChange={this.props.update} />
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val + 1 });
  }

  componentWillMount() {
    console.log("componentWillMount");
    this.setState({ m: 2 });
  }

  render() {
    console.log("render");
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.inc = setInterval(this.update, 500);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.inc);
  }
}

class Wrapper extends Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById("X"));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("X"));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="X" />
      </div>
    );
  }
}

export default Wrapper;

*/
/*
class App extends Component {
  constructor() {
    super();
    this.state = { increasing: false };
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById("root")
    );
  }

  //new properties are coming in
  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val });
  }

  //el siguiente prop tendrá un nuevo valor cuando sea %5, un nuevo estado
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  render() {
    console.log(this.state.increasing);
    return <button onClick={this.update.bind(this)}>{this.props.val}</button>;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }
}

App.defaultProps = { val: 0 };

*/
class App extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  componentWillMount() {
    fetch("https://www.swapi.co/api/people/?format=json")
      .then(response => response.json())
      .then(({ results: items }) => this.setState({ items }));
  }

  filter(e) {
    this.setState({ filter: e.target.value });
  }
  render() {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)} />
        {items.map(item => <Person key={item.name} person={item} />)}
      </div>
    );
  }
}

const Person = props => <h4>{props.person.name}</h4>;
export default App;
