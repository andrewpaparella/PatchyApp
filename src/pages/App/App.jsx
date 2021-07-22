import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
	const [user, setUser] = useState({});
	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar />
					<Switch>
						<Route path='/orders/new'>
							<NewOrderPage />
						</Route>
						<Route path='/orders'>
							<OrderHistoryPage />
						</Route>
						<Redirect to='/orders' />
					</Switch>
				</>
			) : (
				<AuthPage />
			)}
		</main>
	);
}

export default App;