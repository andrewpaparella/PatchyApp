import {useLocation, useHistory } from 'react-router-dom';
import UserComments from '../../components/UserComments/UserComments';
import UserCommentsForm from '../../components/UserCommentsForm/UserCommentsForm';
import * as usersAPI from '../../utilities/users-api';
import {useEffect, useState} from 'react';
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader';



export default function UserProfilePage(props){
    const [profile, setProfile] = useState({});
    const { state: {comment}} = useLocation();
    // const [profileComments, setProfileComments] = useState([])
    const history = useHistory();

    useEffect(() => {
		async function getProfile(){
			const oneUser = await usersAPI.getOne(comment.profileId);
			setProfile(oneUser)
		} 
		getProfile();
	},[]);

    async function handleDeleteComment(profileId, commentId){
		await usersAPI.deleteOne(profileId, commentId);
		setProfile(profile.comments.filter(singleComment => singleComment._id !== commentId));
	}

    async function handleAddComments(newCommentData){
        newCommentData.profileId = profile._id
        const newProfile = await usersAPI.addComment(newCommentData);
        setProfile([newProfile])
    }


    // useEffect(() => {
	// 	history.push('/patchnotes')
	// }, [profile.comments, history])

    return (
        <>
        <UserProfileHeader profile={profile} />
        {profile.comments && profile.comments.map(comment => (
            <UserComments profile={profile} comment={comment} key={comment._id} handleDeleteComment={handleDeleteComment} />
        ))}
        <UserCommentsForm handleAddComments={handleAddComments} profile={profile} setComments={props.setComments} setProfile={setProfile} user={props.user} comments={props.comments} />
        </>
    )
}