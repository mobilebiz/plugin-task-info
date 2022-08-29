import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import TaskInfo from './components/TaskInfo/TaskInfo';

const PLUGIN_NAME = 'TaskInfoPlugin';

export default class TaskInfoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const defaultProps = flex.TaskListItem.defaultProps;
    flex.TaskInfoPanel.Content.replace(
      <TaskInfo defaultProps={defaultProps} key='task-info-component' />,
    );
  }
}
