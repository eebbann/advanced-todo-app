
import React, { useState } from 'react';

import './App.css';
//cutom component
import CustomForm from './component/CustomForm';
import TaskList from './component/TaskList';

function App() {
	const [tasks, setTasks] = useState([]);


	const addTask = (task) => {
		setTasks(prevState => [...prevState, task]);
	};
	const handleDelete = (id) => {
		setTasks(prevState => prevState.filter(r => r.id != id));
	};

	return (
		<div className="container">
			<header>My Task list</header>
			<CustomForm addTask={addTask} />

			{tasks && (
				<TaskList
					tasks={tasks}
					handleDelete={handleDelete}
				/>)
			}
		</div>
	);
}

export default App;

// export default App
