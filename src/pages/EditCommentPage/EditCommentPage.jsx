import React, { useState, } from 'react';
import {useLocation } from 'react-router-dom';


export default function EditCommentPage(props){
    const location = useLocation();

    const [formData, setFormData] = useState(location.state.comment)
    const patch = useState(location.state.patch)


    const handleSubmit = e => {
        e.preventDefault();
        props.handleUpdateComment(patch, formData);
    }

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h1>EDIT COMMENT PAGE</h1>
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
                            value={formData.user}
							readOnly
							hidden
						/>
                        <input type='text'
                        name='patchId'
                        value={formData.patchId}
                        readOnly
						hidden
                        />
                        <input type='text'
                        name='user'
                        value={formData.user}
                        readOnly
                        hidden />
						<button type='submit' >
							Update Comment
						</button>
					</form>
				</div>
			</div>
    )
}