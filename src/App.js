import React from 'react';
import './App.css';
import { ReactComponent as logo } from './image.png';
import { News } from './News';

function App() {
	return (
		<div className="App">
			<News />
			<logo />
		</div>
	);
}

export default App;
