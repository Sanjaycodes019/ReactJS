// creating a class component
import React, { Component } from "react"; 

// Class Component with State
class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0, // no keyword is required (var, const, let)
    };
  }

  // Function to update state
  increaseCount = () => {
    this.setState({count: this.state.count + 1})
  };

  render() {
    return (
      <>
        <h1>Hello {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase Count</button>
      </>
    );
  }
}

export default ClassComponent;


/*

LifeCycle
✅ Mounting (Component is created and added to the DOM)
✅ Updating (Component re-renders due to state/props changes)
✅ Unmounting (Component is removed from the DOM)


Phase	    Method	         
Mounting    constructor()	    	
            render()              
            componentDidMount()	

Updating    shouldComponentUpdate(nextProps, nextState)	
            render()	                       
            componentDidUpdate(prevProps, prevState)

Unmounting 	componentWillUnmount()	  


Action	                            Lifecycle Method Triggered
When the component is created	    constructor() → render() → componentDidMount()
When state changes (button click)	shouldComponentUpdate() → render() → componentDidUpdate()
When the component is removed	    componentWillUnmount()

*/