import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }
  state = {
    persons: [
      { id:'asdf', name: 'Tom', age: 20},
      { id:'asdf11', name: 'random', age: 28},
      { id:'asdf1', name: 'random1', age: 30}
    ],
    showPersons: false
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const personsA = [...this.state.persons];
    personsA.splice(personIndex, 1);
    this.setState({persons: personsA});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] Inside Render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons:true})}}> Show Persons </button>

        <Cockpit
          appTitle = {this.props.title}
          showPersons={this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'I\'m Tom'));
  }
}

export default App;