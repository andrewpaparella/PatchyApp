import PatchNotesList from '../../components/PatchNotesList/PatchNotesList'

export default function PatchNotesPage({patchNotes, handleDeletePatch}){
    return (
        <>
        <PatchNotesList patchNotes={patchNotes} handleDeletePatch={handleDeletePatch} />
        </>
    )
}