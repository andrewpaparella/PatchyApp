import React from 'react';
import { useLocation } from 'react-router-dom';
import PatchCard from '../../components/PatchCard/PatchCard';

export default function PatchDetailsPage(props){
    const {state: {patch}} = useLocation();


    return (
        <>

        <h1> PATCH DETAILS</h1>
        <PatchCard patch={patch} user={props.user} setComments={props.setComments} comments={props.comments} setPatchNotes={props.setPatchNotes} patchNotes={props.patchNotes} />
        </>
    )
}