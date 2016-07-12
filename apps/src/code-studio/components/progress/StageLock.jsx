import React from 'react';
import color from '../../../color';
import FontAwesome from '@cdo/apps/templates/FontAwesome';
import DialogComponent from '@cdo/apps/templates/DialogComponent';

const styles = {
  lockSettingsButton: {
    fontSize: 14,
    backgroundColor: color.cyan,
    color: color.white,
    marginLeft: 0,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  lockSettingsText: {
    marginLeft: 10
  },
  lockStageButton: {
    fontSize: 14,
    backgroundColor: color.orange,
    color: color.white,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  warning: {
    position: 'relative',
    top: 4
  },
  warnIcon: {
    color: color.red
  },
  warnText: {
    marginLeft: 5
  }
};

const StageLock = React.createClass({
  getInitialState() {
    return {
      dialogIsOpen: false
    };
  },

  openDialog() {
    this.setState({dialogIsOpen: true});
  },

  closeDialog() {
    this.setState({dialogIsOpen: false});
  },

  render() {
    // TODO - i18n
    return (
      <div>
        <button style={styles.lockSettingsButton} onClick={this.openDialog}>
          <FontAwesome icon="lock"/>
          <span style={styles.lockSettingsText}>
            Lock settings
          </span>
        </button>
        <button style={styles.lockStageButton}>
          Lock stage
        </button>
        <span style={styles.warning}>
          <FontAwesome icon="exclamation-triangle" style={styles.warnIcon}/>
          <span style={styles.warnText}>
            Lock as soon as students are done
          </span>
        </span>
        <DialogComponent
            isOpen={this.state.dialogIsOpen}
            handleClose={this.closeDialog}
        >
          asdf
        </DialogComponent>
      </div>
    );
  }
});

export default StageLock;
