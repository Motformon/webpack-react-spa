import * as React from 'react';
const classes = require('./style.css');
class Home extends React.Component<any, any> {
	constructor(props) {
    super(props);
	}
	
  public render() {

	 return(
		//  <h1 className='Home'>Home 1</h1>
		 <h1 className={classes.Home}>Home 1</h1>
	 )
 }
}

export default Home;
