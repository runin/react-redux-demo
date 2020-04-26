import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux';
import ComA from './page/ComA';
import ComB from './page/ComB';
import ComC from './page/ComC';

function App() {
  	return (
    	<Provider store={store}>
      		<div className="App">
				<ComA/>
				<ComB/>
				<ComC/>
          </div>
    	</Provider>
    
  	);
}

export default App;
