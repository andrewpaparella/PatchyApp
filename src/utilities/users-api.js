import {sendRequest} from './sendRequest'

const BASE_URL = '/api/users';

export function signUp(userData) {
	return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

// the route for our checkToken function should be /api/users/check-token
export function checkToken() {
	return sendRequest(`${BASE_URL}/check-token`);
}

export function getAll(){
    return sendRequest(BASE_URL)
}

export function addComment(comment){
    return sendRequest(`${BASE_URL}/${comment.profileId}/comments`, "POST", comment);
}

export function deleteOne(userId, commentId){
	return sendRequest(`${BASE_URL}/${userId}/comments/${commentId}`, 'DELETE')
}

export function getOne(profileId){
	return sendRequest(`${BASE_URL}/${profileId}`)
}