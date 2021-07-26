import { Link } from 'react-router-dom';
// We can call any exported function with this import as userService
import * as userService from '../../utilities/users-service';

function NavBar({ user }) {
	// Add the following function
	function handleLogOut() {
		// Delegate to the users-service
		userService.logOut();
		// Update the state will also cause a re-render
		setUser(null);
	}

	return (
		<nav>
			<Link to='/orders'>Order History</Link>
			&nbsp; | &nbsp;
			<Link to='/orders/new'>New Order</Link>
			&nbsp; | &nbsp;
			<span>
				<b>Welcome, {user.name}</b>
			</span>
			&nbsp; | &nbsp;
			<Link to='' onClick={handleLogOut}>
				Log Out
			</Link>
		</nav>
	);
}

export default NavBar;
