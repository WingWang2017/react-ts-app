import * as React from 'react';

import { observer } from 'mobx-react';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

@observer
class App extends React.Component {

  public ss = (n: number) => (): number => {
    const ss = 0;
    console.info(n)
    alert(n)
    console.log(ss);
    return n;
  }

  public render() {
    return (
      <div className="App" onClick={this.ss(11)}>
        <h1 className="App-title">Welcome to React</h1>
        <div>ssdasda </div>
      </div>
    );
  }
}

export default App;