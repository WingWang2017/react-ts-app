import * as React from 'react';

import { observer } from 'mobx-react';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

import Text from './text';

@observer
class App extends React.Component<{}, IState> {


  public state = {
    index: '1'
  }

  public componentDidMount(): void {
    this.onClick({
      ss: '2b小姐姐'
    });
    this.onCheng(1 as number);
  }

  public ss = (n: number) => (): number => {
    const ss: string = '本子娜';
    console.info(n)
    alert(n)
    console.log(ss);
    if (this.state.index !== '1') {
      return 1;
    }
    this.setState({
      index: '心爆气流斩'
    }, () => {
      console.log(this.state.index);
    });
    return n;
  }

  public onCheng<T>(value: T): T {
    console.log(value);
    return value;
  }

  public onClick(obj: Iobj): void {
    console.log(obj);
  }

  public render() {
    return (
      <div className="App" onClick={this.ss(11)}>
        <h1 className="App-title">Welcome to React{this.state.index}</h1>
        <Bottom poo='222' onSove='1'>
          <div>ssss 123456 我的最新</div>
        </Bottom>
        <Text ss={undefined} />
      </div>
    );
  }
}

interface Iobj {
  ss: string
}

interface IState {
  index: string
}

interface Iprop {
  children: JSX.Element
  poo: string
  onSove: string
}

const Bottom = (props: Iprop): JSX.Element => (
  <div>sss {props.poo} {props.children} {props.onSove}</div>
)

export default App;
