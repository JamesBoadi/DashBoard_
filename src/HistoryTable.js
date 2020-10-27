import React, { Component, useState, useContext } from 'react';
import { Box } from '@chakra-ui/core';

const table = <table style={{color: "white;"}}>
    <tbody>
    <tr>
        <th>Stock</th>
        <th>Date</th>
        <th>Position</th>
        <th>Price</th>
        <th>High</th>
        <th>Close</th>
        <th>Volume</th>
    </tr>
    <tr>
        <td>GOOGL</td>
        <td>03-09-20 04:09PM</td>
        <td>230</td>
        <td>240</td>
        <td>430</td>
        <td>400</td>
        <td>45679900</td>
    </tr>
    </tbody>
</table>


const HistoryTable = props => {
    return (
        <Box
            bg="rgb(60,60,60)"
            style={{position: "absolute", top: 470}}
            boxShadow='sm'
            textAlign='center'
            height='20rem'
            width='52rem'
            rounded="lg"
            borderWidth="1px"
            color='white'>
            <h3>Active Orders</h3>
            {table}
        </Box>
    );
};

export default HistoryTable;