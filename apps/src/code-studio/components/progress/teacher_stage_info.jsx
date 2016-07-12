/* global dashboard */

import React from 'react';
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
    padding: 10
  },
  lessonPlan: {
    fontFamily: '"Gotham 5r", sans-serif',
    fontSize: 12,
    marginLeft: 10
  },
  dotIcon: progressStyles.dotIcon,
  lockButton: {
    fontSize: 14,
    backgroundColor: color.cyan,
    color: color.white,
    marginLeft: 0,
    marginTop: 10
  },
  lockText: {
    marginLeft: 10
  }
};

const TeacherStageInfo = React.createClass({
  propTypes: {
    lessonPlanUrl: React.PropTypes.string,
    lockable: React.PropTypes.bool.isRequired
  },

  render() {
    // TODO - lessonPlanUrl
    return (
      <div style={styles.container}>
        <div style={styles.main}>
          <FontAwesome icon="file-text" style={styles.dotIcon}/>
          <span style={styles.lessonPlan}>
            {dashboard.i18n.t('view_lesson_plan')}
          </span>
          {this.props.lockable &&
            <div>
              <button style={styles.lockButton}>
                <FontAwesome icon="lock"/>
                {/* TODO - i18n */}
                <span style={styles.lockText}>
                  Lock settings
                </span>
              </button>
            </div>
          }
        </div>
      </div>
    );
  }
});

export default TeacherStageInfo;
