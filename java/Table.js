
	const move = e => {
		const el = e.target
		el.style.left = `${e.pageX - offsetX}px`
		el.style.top = `${e.pageY - offsetY}px`
	}

	const add = e => {
		const el = e.target
		offsetX = e.clientX - el.getBoundingClientRect().left
		offsetY = e.clientY - el.getBoundingClientRect().top
		
		
		el.addEventListener('mousemove', move)
	}

	const remove = e => {
		const el = e.target
		el.removeEventListener('mousemove', move)















	}

	














	/*
	let observer = null

	function emitChange() {
		observer(knightPosition)
	}*/


	/* fix later
	const move = (e) => {
		let offsetX, offsetY;
		const el = e.target;
		offsetX = pos.x;
		offsetY = pos.y;
		let left = `${e.pageX - offsetX}px`;
		let top = `${e.pageY - offsetY}px`;


		
		el.style.left = left;
		el.style.top = top;
	} */


	// do something
	/*	function functionPassed () {
			props.handle();
		} */
