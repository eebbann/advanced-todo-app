import React, { useState } from 'react';
import {CheckIcon } from '@heroicons/react/24/solid';



const EditForm = ({ editedTask, updatedTasks }) => {
	 
	const [updatedTask, setUpdatedTask] = useState(editedTask.name);

	const handleFormSubmit = (e) => {
		console.log(editedTask.name)
		e.preventDefault();
		updatedTasks({...editedTask, name:updatedTask})
	};

	return (
		<div role="dialog" arial-labelledy="editedTask"
		onClick={handleFormSubmit}
		> 
			<form className='todo' onSubmit={handleFormSubmit} >
				<div className='wrapper'>

					<input type="text" className="input" id="editedTask"
						value={updatedTask}
						onInput={(e) => setUpdatedTask(e.target.value)}
						required
						autoFocus
						maxLength={60}
					/>
					<label htmlFor='editedTask'
						className='label'> Update Task</label>
					<button className='btn' aria-label='updated task' typeof='submit' >
						<CheckIcon className="h-6 w-6 text-blue-500" width={25} height={25} />

					</button>

				</div>
			</form>
			
			</div>

	);
};

export default EditForm;