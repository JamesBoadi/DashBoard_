import React, { Component, useState, createContext } from 'react';
import { useDrag } from "react-dnd";
import { Components } from './Components';
import MousePosition from './MousePosition';
import { Box } from '@chakra-ui/core';
import './App.css';

// https://reacttraining.com/blog/using-hooks-in-classes/ // https://medium.com/@adebola.niran/how-to-create-multiple-refs-in-react-with-useref-5fa2bbef5d15 ask on stack overflow
//  http://web.archive.org/web/20120101221030/http://blog.morrisjohns.com/javascript_closures_for_dummies.html7

const OrderForm = (props) => {
	let pos = MousePosition();
	let offsetX, offsetY;
	const form = React.useRef();

	const [state, setState] = useState({ observerState: false });
	const [stock, setStock] = useState("GOOGL");
	const [stockPrice, setStockPrice] = useState(500); // We might need an interface for multiple state updates
	const [stockChangePer, setStockChangePer] = useState("0.5%");

	const [{ isDragging }, drag] = useDrag({
		item: { // Define form
			type: Components.ORDERFORM,
			id: props._id,
		},

		end: (item, monitor) => { // if page refreshes, we need to cache the sttate
			const res = monitor.getDropResult();
			if (res && state)
				setState(false)
			else if (res && !state)
				setState(true)
		},
		// collect <- function, monitor, connect <- parameter
		collect: (monitor, connect) => ({
			// properties to inject into component
			isDragging: !!monitor.isDragging(),
		}),
	});


	// Use a ref for references https://medium.com/swlh/react-dnd-in-examples-ce509b25839d
	// Call this funtion from Dropzone 	<input class="form-control" class="multiplier" id="multiplier" aria-describedby="multiplier" placeholder="Multiplier"></input>

	const orderformBg = <Box
		bg="#ebebeb"
		style={{ position: "absolute", top: 0 }}
		boxShadow='sm'
		textAlign='center'
		height='2rem'
		width='100%'
		rounded="lg"
		borderWidth="1px">
	</Box>

	const placeOrderStyle = {
		position: "absolute",
		width: "90%",
		margin: "auto",
		left: 18,
		transform: "translate(0px, 350px)"
	}


	let orderform =  // pass as props to main (with dropzzones)
		<form class="mainForm" id="border" ref={drag} style={{
			opacity: isDragging ? 0.5 : 1
		}} >

			<h3 style={{ position: "absolute", left: 10 }} >Stock: {stock}</h3>
			<h5 style={{ position: "absolute", left: 10, top: 45 }}>{stockPrice + "   " + stockChangePer}</h5>

			<Box
				bg="#D3D3D3"
				style={{ position: "absolute", bottom: 150 }}
				boxShadow='sm'
				height='40%'
				width='100%'
				rounded="lg"
				borderWidth="1px">

				<div class="form-group" style={{ position: "fixed" }, { transform: "translate(0px, 6px)" }}>
					<button style={{ padding: "15px 50px" }} type="submit" class="buyButton">Buy</button>
					<button style={{ padding: "15px 50px" }} type="submit" class="sellButton">Sell</button>
				</div>

				<p style={{ position: "absolute", left: 20, bottom: 65 }}>Size</p>
				<p style={{ position: "absolute", left: 20, bottom: 45 }}>GBP (£)</p>

				<input style={{ position: "absolute", left: 135, bottom: 74, padding: "5px" }} class="multiplier" type="number" min="0" max="10" step="2" value="6" size="6"></input>

				<p style={{ position: "absolute", right: 80, bottom: 65 }}>Min</p>
				<p style={{ position: "absolute", right: 38, bottom: 45 }}>Contracts</p>
			</Box>

			<button type="submit" class="btn btn-success" style={placeOrderStyle}>Place Order</button>
		</form>


	return (
		<div class="trade">
			{props.show(state, orderform)}
		</div>
	);

};

export default OrderForm;
