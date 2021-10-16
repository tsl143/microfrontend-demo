import React from "react";
import RemoteComponent from "remote1/SharedComponent";

const App = () => {
	const [counter, setCounter] = React.useState(0);

	return (
	<div style={{height: '200px', width: '400px', padding: '20px', textAlign: 'center', background: '#5f9a8c', margin: '30px auto'}}>
		<h1>Host App</h1>
		<div> Count in host {counter}</div>
		<RemoteComponent counter={counter} />
		<button onClick={() => setCounter(counter + 1)}>Increase</button>
	</div>
)};

export default App;
