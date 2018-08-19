import React, {Component} from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  compodentDidCatch = (error, info) => {
    this.setState({hasError:false, errorMessage: error});
  }


  render() {
    if (this.state.hasError) {
        return <h1> Something went wrong </h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
