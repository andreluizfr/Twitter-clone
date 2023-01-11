import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './redux/store';

import { QueryClientProvider } from 'react-query';
import { queryClient } from './utils/query';

import App from './App';
import './styles.css';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
);

