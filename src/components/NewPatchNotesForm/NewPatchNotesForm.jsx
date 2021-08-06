import {useState} from 'react';
import * as patchAPI from '../../utilities/patchnotes-api';


export default function NewPatchNotesForm({patchNotes, setPatchNotes}) {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        date: Date.now(),
    })

    async function handleAddPatchNotes(patch){
        const newPatch = await patchAPI.create(patch);
        setPatchNotes([...patchNotes, newPatch])
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddPatchNotes(formData);
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
						<label>Title</label>
						<input
							type='text'
							name='title'
                            value={formData.title}
							onChange={handleChange}
							required
						/>
						<label>Body</label>
						<input
							type='text'
							name='body'
                            value={formData.body}
							onChange={handleChange}
							required
						/>
                        <input 
                        type='Date'
                        name='date'
                        value={formData.date}
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