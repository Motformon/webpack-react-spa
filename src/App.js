import React from 'react';
import Home from './app/containers/Home';
import './App.css';
import './App.scss';
export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Home/>
			</div>
		) 
	}
}