import React, { useState } from 'react';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/solid';



const CustomForm = ({ addTask }) => {
	const [task, setTask] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		addTask({
			name: task,
			checked: false,
			id: Date.now()
		});
		setTask("");
	};

	return (
		<form className='todo' onSubmit={handleFormSubmit} >
			<div className='wrapper'>

				<input type="text" className="input" id="task"
					value={task}
					onInput={(e) => setTask(e.target.value)}
					required
					autoFocus
					maxLength={60}
				/>
				<label htmlFor='task'
					className='label'> Enter Task</label>
				<button className='btn' aria-label='Add task' typeof='submit' >
					<ArrowDownOnSquareIcon className="h-6 w-6 text-blue-500" width={25} height={25}/>

				</button>

			</div>
		</form>
	);
};

export default CustomForm;