import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory} from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import PatchNotesPage from '../PatchNotesPage/PatchNotesPage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import NewPatchNotesPage from '../NewPatchNotesPage/NewPatchNotesPage';
import * as patchAPI from '../../utilities/patchnotes-api';
import PatchDetailsPage from '../PatchDetailsPage/PatchDetailsPage';
import EditPatchPage from '../EditPatchPage/EditPatchPage';
import EditCommentPage from '../EditCommentPage/EditCommentPage';
import * as userAPI from '../../utilities/users-api'

function App() {
	const [user, setUser] = useState(getUser());
	const [patchNotes, setPatchNotes] = useState([]);
	const [comments, setComments] = useState([]);
	const history = useHistory();

	useEffect(() => {
		history.push('/patchnotes')
	}, [patchNotes, comments, history])

	useEffect(() => {
		async function getPatches(){
			const patches = await patchAPI.getAll();
			setPatchNotes(patches)
		} 
		getPatches();
	},[]);

	// useEffect(() => {
	// 	async function getUsers(){
	// 		const users = await userAPI.getAll();
	// 		setUser(users)
	// 	} 
	// 	getUsers();
	// },[]);

	// useEffect(() => {
	// 	async function getPatches(){
	// 		const patches = await patchAPI.getAll();
	// 		setPatchNotes(patches)
	// 	} 
	// 	getPatches();
	// },[comments]);

	async function handleUpdatePatch(patch){
		const updatedPatch = await patchAPI.update(patch);
		const newPatchArray = patchNotes.map( p => p._id === updatedPatch._id ? updatedPatch : p );
		setPatchNotes(newPatchArray);
	}

	async function handleDeletePatch(id){
        await patchAPI.deletePatch(id);
        setPatchNotes(patchNotes.filter(patch=> patch._id !== id));
    }

	async function handleUpdateComment(patch, comment){
		const updatedComment = await patchAPI.updateComment(patch, comment);
		// const newCommentsArray = patchNotes.comments.map(c => c._id === updatedComment._id ? updatedComment : c );
		setPatchNotes(updatedComment)
	}
	// useEffect(() => {
	// 	async function getComments(){
	// 		const comments = await patchAPI.getAll();
	// 		setComments(comments)
	// 	} 
	// 	getComments();
	//   },[]);  

	return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Switch>
						<Route exact path='/patchnotes'>
							<PatchNotesPage patchNotes={patchNotes} user={user} handleDeletePatch={handleDeletePatch} />
						</Route>
						<Route exact path='/patchnotes/new'>
							<NewPatchNotesPage setPatchNotes={setPatchNotes} patchNotes={patchNotes} />
						</Route>
						<Route exact path='/profile'>
							<UserProfilePage user={user} setUser={setUser} />
						</Route>
						<Route exact path='/details'>
							<PatchDetailsPage user={user} setComments={setComments} comments={comments} setPatchNotes={setPatchNotes} patchNotes={patchNotes} />
						</Route>
						<Route exact path='/edit'>
							<EditPatchPage handleUpdatePatch={handleUpdatePatch} />
						</Route>
						<Route exact path='/editcomment'>
							<EditCommentPage handleUpdateComment={handleUpdateComment} />
						</Route>
						<Redirect to='/patchnotes' />
					</Switch>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	);
}

export default App;
