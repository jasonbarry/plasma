import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';
import getDataAttrs from '../../getDataAttrs';

class Tooltip extends React.Component {
  render() {
    return (
      <div
        className={style.wrapper}
        {...getDataAttrs(this.props.data)}
      >
        { this.props.children }
        <div className={style.content}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

Tooltip.defaultProps = {
  children: 'test',
  content: 'Protip: Tooltips can be used to reveal information.',
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node,
  data: PropTypes.obj,
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
