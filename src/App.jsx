
import React, { useState } from 'react';

import './App.css';
//cutom component
import CustomForm from './component/CustomForm';
import EditForm from './component/EditForm';
import TaskList from './component/TaskList';

function App() {
	const [tasks, setTasks] = useState([]);
	const [editedTask, setEditedTask] = useState(null);
	const [isEditing, setIsEditing] = useState(false);




	const addTask = (task) => {
		setTasks(prevState => [...prevState, task]);
	};
	const handleDelete = (id) => {
		setTasks(prevState => prevState.filter(r => r.id != id));
	};
	const handleUpdate = (id) => {
		setTasks(prevState => prevState.map(t => (t.id === id 
			? {...t, checked : !t.checked} : t )))
	};
	const updatedTasks = (task) => { 
		setTasks(prevState => prevState.map(t => (t.id === task.id 
			? {...task, name: task.name} : t )))
	}; 

 
	const enterEditedTask = (task) => {
		console.log( `hello`, editedTask)
		setEditedTask(task);
		setIsEditing(true);
	};

	return (
		<div className="container">
			<header>My Task list</header>
			<CustomForm addTask={addTask}  />
	{isEditing && (
		<EditForm
		editedTask = {editedTask} 
		updatedTasks={updatedTasks}
		/>)}
			{tasks && (
				<TaskList
					tasks={tasks}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
					enterEditedTask={enterEditedTask}
					
				/>)
			}
		</div>
	);
}

export default App;

// export default App
