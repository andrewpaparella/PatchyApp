import {sendRequest} from './sendRequest';
const BASE_URL = '/api/patchnotes';

export function create(patch){
    return sendRequest(`${BASE_URL}/new`, "POST", patch);
}

export function getAll(){
    return sendRequest(BASE_URL)
}

export function addComment(comment){
    return sendRequest(`${BASE_URL}/${comment.patchId}/comments`, "POST", comment);
}

export function deleteOne(patchId, commentId){
	return sendRequest(`${BASE_URL}/${patchId}/comments/${commentId}`, 'DELETE')
}

export function update(patch){
    return sendRequest(`${BASE_URL}/${patch._id}`, 'PUT', patch)
}

export function deletePatch(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export function updateComment(patch, comment){
    return sendRequest(`${BASE_URL}/${patch[0]._id}/comments/${comment._id}`, 'PUT', comment)
}

export function getOne(patchId){
    return sendRequest(`${BASE_URL}/${patchId}/comments`)
}