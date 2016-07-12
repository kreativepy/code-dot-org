/* global dashboard */

import React from 'react';
import Radium from 'radium';
import FontAwesome from '@cdo/apps/templates/FontAwesome';
import color from '../../../color';
import progressStyles from './progressStyles';

/**
 * A component that renders information in our StageProgress view that is only
 * viewable by teachers
 */

const styles = {
  container: {
    marginBottom: 15,
    marginLeft: 5
  },
  main: {
    display: 'inline-block',
    backgroundColor: color.lightest_cyan,
    borderWidth: 2,
    borderColor: color.cyan,
    borderRadius: 10,
    borderStyle: 'solid',
    padding: 10,
    maxWidth: '90%'
  },
  lessonPlan: {
    ':hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  lessonPlanText: {
    fontFamily: '"Gotham 5r", sans-serif',
    fontSize: 12,
    marginLeft: 10
  },
  dotIcon: progressStyles.dotIcon,
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

const TeacherStageInfo = React.createClass({
  propTypes: {
    lessonPlanUrl: React.PropTypes.string.isRequired,
    lockable: React.PropTypes.bool.isRequired
  },

  clickLessonPlan() {
    window.open(this.props.lessonPlanUrl, '_blank');
  },

  render() {
    // TODO - i18n
    return (
      <div style={styles.container}>
        <div style={styles.main}>
          <span style={styles.lessonPlan} onClick={this.clickLessonPlan}>
            <FontAwesome icon="file-text" style={styles.dotIcon}/>
            <span style={styles.lessonPlanText}>
              {dashboard.i18n.t('view_lesson_plan')}
            </span>
          </span>
          {this.props.lockable &&
            <div>
              <button style={styles.lockSettingsButton}>
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
            </div>
          }
        </div>
      </div>
    );
  }
});

export default Radium(TeacherStageInfo);
