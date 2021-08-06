import PatchNotesListItem from '../PatchNotesListItem/PatchNotesListItem';

export default function PatchNotesList({patchNotes, handleDeletePatch}){
    return (
        <main className="PatchList">
            <h1>PATCH NOTES</h1>
            {patchNotes.map(patch => (
                <PatchNotesListItem patch={patch}
                key={patch._id} handleDeletePatch={handleDeletePatch} />
            ))}
        </main>
    )
}