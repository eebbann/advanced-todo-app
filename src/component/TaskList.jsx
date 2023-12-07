import React from 'react';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

function TaskList({ tasks,handleDelete  }) {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a,b)=>b.id -a.id).map(task => ( <TaskItem key={task.id} task={task} handleDelete={handleDelete}/>
			 )
       )}
    </ul>
  );
}

export default TaskList;