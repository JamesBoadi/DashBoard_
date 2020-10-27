import React, { Component, useState, useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Components } from './Components';
import MousePosition from './MousePosition';
import { Box } from '@chakra-ui/core';
import { OrderForm, CardContext } from './OrderForm';
import './App.css';


const DropZoneOne = props => {
	const [zone, setZoneColor] = useState('blue');
	const [event, setEv] = useState({ el: null, left: null, top: null });

	let pos = MousePosition();

	const [{ isOver }, drop] = useDrop({  // Get items from other class
		accept: Components.ORDERFORM,  // Add recongition for other forms

		collect: (monitor) => ({
			// properties to inject into component
			isOver: !!monitor.isOver(),
		}),
	});

	
	// Drop Zone
	return (
		<div>
			<Box
				ref={drop}
				boxShadow='sm'
				style={{position: "absolute", top: 0}}
				bg={isOver ? "white" : "rgb(50,50,50)"}
				height='28rem'
				width='22rem'
				fontWeight="bold"
				color='white.900'
			>
				{props.show()}
			</Box>

		</div>

	);


};

export default DropZoneOne;
