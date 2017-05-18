import React from 'react';
import './css/SimpleModal.css';

export default function SimpleModal(props) {
	let classes = props.list.length > 0 ? 'modal' : 'modal hidden';
	return (
		<div className={classes}>
			<ul className="list">
				{
					props.list.map((item, index)=>{
						return <li key={index}>{item.name}</li>
					})
				}
			</ul>
			<p>
				<a onClick={props.onClose} href="#">Close</a>
			</p>
		</div>
	);
};

SimpleModal.defaultProps = {
	list: []
};