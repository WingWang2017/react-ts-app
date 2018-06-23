import * as React from 'react';

interface IProps {
  onhand: number;
}

interface IState {
  value: number;
}

class Stepper extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: props.onhand
    };
  }
  public render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.onMinus}> - </button>
        <span>{this.state.value}</span>
        <button onClick={this.onPlus}> + </button>
      </div>
    );
  }
  public onMinus = (): void => {
    this.setState({
      value: this.state.value - 1
    });
  }
  public onPlus = (): void => {
    this.setState({
      value: this.state.value + 1
    });
  }
}

const HOC = (StepperComp: any) => {
  return (props: any) => {
    console.log(props);
    if (props.onhand > 0) {
      return <StepperComp onhand={props.onhand} />;
    } else {
      return <div>无货</div>;
    }
  };
};

const ProductsStepper2 = HOC(Stepper);

export default ProductsStepper2;
