import * as React from 'react';

const HOCDindMethod = (Component: any): any => {
  return class DindMethod extends React.Component<any, any> {

    public state = {
    };

    public $f7: any;
    public store: any;

    public render() {
      return (
        <Component {...this.props.iProps} />
      );
    }

    public componentDidMount(): void {
      console.log(this);
    }

  };
};

export default HOCDindMethod;
