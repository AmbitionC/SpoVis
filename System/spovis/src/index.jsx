import React from 'react';
import ReactDOM from 'react-dom';

import Main from './container/home.jsx';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Main />
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));