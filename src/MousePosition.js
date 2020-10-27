import { Component, useState, useEffect } from 'react';
import './App.css';

 export default function MousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null, pageX: null, pageY: null});

    const updateMousePosition = ev => {
  
        const el = ev.target;
        let offsetX = ev.clientX - el.getBoundingClientRect().left;
        let offsetY = ev.clientY - el.getBoundingClientRect().top;
        
        setMousePosition({ x: offsetX, y: offsetY, pageX: ev.pageX, pageY: ev.pageY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

/*
}*/