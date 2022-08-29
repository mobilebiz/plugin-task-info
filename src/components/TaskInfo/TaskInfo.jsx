import React from 'react';

const TaskInfo = (props) => {
  const { task, defaultProps } = props;
  if (!task || !defaultProps) return null;

  // Change second line.
  defaultProps.secondLine = 'Can you change this line.';

  // console.log(`🐞 task`);
  // console.dir(task);

  return (
    <div>
      <h1>TASK CONTEXT</h1>
      <p>Can you write some message at this area.</p>
      <p>And links can also be placed as follows.</p>
      <a href='https://www.google.com/' target='_blank'>
        Google
      </a>
      <hr />
      <p>dateCreated: {task.dateCreated.toTimeString()}</p>
      <p>name: {task.attributes.name}</p>
    </div>
  );
};

export default TaskInfo;
