import React from 'react';
import './css/Row.css';

export default function Row(props) {
	return (
		<li className="row">
			<div className="col-fixed-85 middle-center bg-red">
				<input type="checkbox" checked={props.checked} onChange={props.onChange} />
			</div>
			<div className="col">
				<div className="name-container align-left bg-green">{props.name}</div>
				<div className="email-container align-left bg-yellow">{props.email}</div>
			</div>
		</li>
	);
};

Row.defaultProps = {
	checked: true,
	name: '',
	email: ''
};