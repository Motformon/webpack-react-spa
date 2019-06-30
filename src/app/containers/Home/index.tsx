import * as React from 'react';
const classes = require('./style.scss');
import './style.css';

class Home extends React.Component<any, any> {
	constructor(props) {
    super(props);
	}
	
  public render() {

	 return(
		 <h1 className='Home'>Home 1 <span className={classes.Home}>Home 1</span></h1>
	
	 )
 }
}

export default Home;
