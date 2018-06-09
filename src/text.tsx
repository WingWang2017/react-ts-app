import * as React from 'react';
import { observer } from 'mobx-react';

interface IProps {
  ss?: number
}

@observer
class Text extends React.Component<IProps, {}> {

  public static defaultProps = {
    ss: 0
  }

  public render() {
    return (
      <div>asdsa {(this.props.ss || 0) + 1}</div>
    )
  }
}

export default Text;