import {useLocation, useHistory } from 'react-router-dom';
import UserComments from '../../components/UserComments/UserComments';
import UserCommentsForm from '../../components/UserCommentsForm/UserCommentsForm';
import * as usersAPI from '../../utilities/users-api';
import {useEffect, useState} from 'react';
import UserProfileHeader from '../../components/UserProfileHeader/UserProfileHeader';



export default function UserProfilePage(props){
    const { state: {comment}} = useLocation();
    // const [profileComments, setProfileComments] = useState([])
    const history = useHistory();

    useEffect(() => {
		async function getProfile(){
			const oneUser = await usersAPI.getOne(comment.profileId);
			props.setProfile(oneUser)
		} 
		getProfile();
	},[]);

    async function handleDeleteComment(profileId, commentId){
		await usersAPI.deleteOne(profileId, commentId);
		props.setProfile(props.profile.comments.filter(singleComment => singleComment._id !== commentId));
	}

    async function handleAddComments(newCommentData){
        newCommentData.profileId = props.profile._id
        const newProfile = await usersAPI.addComment(newCommentData);
        console.log(newProfile)
        props.setProfile([newProfile])
    }


    useEffect(() => {
		history.push('/patchnotes')
	}, [props.profile, history])

    return (
        <>
        <UserProfileHeader profile={props.profile} />
        {props.profile.comments && props.profile.comments.map(comment => (
            <UserComments profile={props.profile} comment={comment} key={comment._id} handleDeleteComment={handleDeleteComment} />
        ))}
        <UserCommentsForm handleAddComments={handleAddComments} profile={props.profile} setComments={props.setComments} setProfile={props.setProfile} user={props.user} comments={props.comments} />
        </>
    )
}