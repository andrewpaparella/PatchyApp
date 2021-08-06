import NewPatchNotesForm from '../../components/NewPatchNotesForm/NewPatchNotesForm';

export default function NewPatchNotesPage({patchNotes, setPatchNotes}){
    return (
        <NewPatchNotesForm patchNotes={patchNotes} setPatchNotes={setPatchNotes}/>
    )
}