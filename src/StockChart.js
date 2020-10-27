import React, { Component, useState, useContext } from 'react';
import { Components } from './Components';
import { useDrag } from "react-dnd";
import { Chart } from 'react-charts';
import './App.css';

const StockChart = (props) => {
    const [state, setState] = useState({ observerState: false });

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

    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    const lineChart = ( // Pass as props to main js
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically


        <div
            ref={drag}
            style={{
                width: '42rem',
                height: '28rem',
                background: 'rgba(60, 60, 60)',
                opacity: isDragging ? 0.5 : 1,
                cursor: 'pointer'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )

    return (
        <div>
            {props.show(state, lineChart)}
        </div>
    );
};

export default StockChart;
