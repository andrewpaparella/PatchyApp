import { Link } from 'react-router-dom';
// We can call any exported function with this import as userService
import * as usersService from '../../utilities/users-service';

function NavBar({ user, setUser }) {
	// Add the following function
	function handleLogOut() {
		// Delegate to the users-service
		usersService.logOut();
		// Update the state will also cause a re-render
		setUser(null);
	}

	return (
		<nav>
			<Link to='/patchnotes'>Patch Notes</Link>
			&nbsp; | &nbsp;
			<Link to='/patchnotes/new'>Post New Patch</Link>
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