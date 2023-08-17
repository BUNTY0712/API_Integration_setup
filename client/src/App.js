import React from 'react';
import { Provider } from 'react-redux';
import MainRouter from './MainRouter';
import store from './Store';

const App = () => {
	return (
		<>
			<Provider store={store}>
				<MainRouter />
			</Provider>
		</>
	);
};

export default App;
