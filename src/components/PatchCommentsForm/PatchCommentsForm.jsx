import {useState, useEffect} from 'react';
import * as patchAPI from '../../utilities/patchnotes-api';


export default function PatchCommentsForm({user, patch, setPatchNotes, handleAddPatchComments}) {
    const [formData, setFormData] = useState({
        name: user.name,
        body: '',
        date: Date.now(),
        patchId: patch._id,
        profileId: user._id
    })

    const patchId = patch._id
	useEffect(() => {
		async function getPatch(){
			const patch = await patchAPI.getOne(patchId);
			setPatchNotes(patch)
		} getPatch();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddPatchComments(formData);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div>
				<div className='form-container'>
					<form autoComplete='off' onSubmit={handleSubmit}>
						<label>Body</label>
						<input
							type='text'
							name='body'
                            value={formData.body}
							onChange={handleChange}
							required
						/>
                        <input
							type='text'
							name='user'
                            value={formData.name}
							readOnly
							hidden
						/>
                         <input
							type='text'
							name='user'
                            value={formData.profileId}
							readOnly
							hidden
						/>
                        <input type='text'
                        name='patchId'
                        value={formData.patchId}
                        readOnly
                        hidden
                        />
						<button type='submit' >
							Post
						</button>
					</form>
				</div>
			</div>
    )
}