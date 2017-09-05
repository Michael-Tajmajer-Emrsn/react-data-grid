import React from 'react';
import PropTypes from 'prop-types';
import {ContextMenu} from 'react-contextmenu';

class ReactDataGridContextMenu extends React.Component {
  render() {
    const id = this.props.contextMenuId || 'reactDataGridContextMenu';
    return (
      <ContextMenu identifier={id}>
        {this.props.children}
      </ContextMenu>
    );
  }
}

ReactDataGridContextMenu.propTypes = {
  children: PropTypes.node,
  contextMenuId: PropTypes.string
};

export default ReactDataGridContextMenu;
