import React from "react";
import SharedComponent from "./SharedComponent";

const count = 1;

const App = () => (
	<div style={{height: '200px', width: '400px', padding: '20px', textAlign: 'center', background: '#db4669', margin: '30px auto'}}>
		<h1>Remote App</h1>
		<SharedComponent counter={count} />
	</div>
);

export default App;
