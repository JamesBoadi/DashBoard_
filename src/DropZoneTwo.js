import React, { Component, useState, useContext } from 'react';
import { useDrop } from 'react-dnd';
import { Components } from './Components';
import MousePosition from './MousePosition';
import { Box } from '@chakra-ui/core';
import { OrderForm, CardContext } from './OrderForm';
import './App.css';

const DropZoneTwo = props => {
	const [{ isOver }, drop] = useDrop({  
		accept: Components.ORDERFORM,
		
		//drop: (item, monitor) => markAsDone(item.id),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<div>
			<Box
				ref={drop}
				style={{position: "absolute", top: 0, left:600, zIndex: -90}}
				boxShadow='sm'
				bg={isOver ? "white" : "rgb(50,50,50)"}
				height='28rem'
				width='50rem'
				fontWeight="bold"
				color='red.900'
			>
				{props.show()}
			</Box>
		</div>
	);
};

export default DropZoneTwo;
