import { CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import styles from './TaskItem.module.css';
function TaskItem({ task, handleDelete }) {
	const [checked, setChecked] = useState(task.checked);

	const handleCheckedSubmit = () => {
		console.log(checked);
		setChecked(!checked);
	};


	return (


		<li className={styles.task}>
			<div className={styles["task-group"]}>
				<input type="checkbox"
					checked={task.checked}
					onChange={handleCheckedSubmit}
					id={task.id}
					name={task.name}
					className={styles.checkbox}
				/>

				<label htmlFor={task.id} className={`${checked ? styles.label : styles.unchecbox}`}>
					{task.name}
					<p className={`${!checked ? styles.uncheckbox : styles.checkmark}`}>
						<CheckIcon strokeWidth={2} width={24} height={24} />
					</p>
				</label>
				<div className={styles.ud}>
					<button className="btn"
					//  onClick={}
					>
						<PencilSquareIcon widgth={20} height={20} />
					</button>
					<button className='btn' aria-label='Add task'
						onClick={() => handleDelete(task.id)}
					>
						<TrashIcon width={20} height={20} />
					</button>
				</div>

			</div>
		</li>


	);
}

export default TaskItem;