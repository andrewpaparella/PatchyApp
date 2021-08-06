import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditPatchPage(props){
    const location = useLocation();

    const [invalidForm, setValidForm] = useState(true);
    const [formData, setFormData] = useState(location.state.patch)

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity()
        ? setValidForm(false)
        : setValidForm(true);
    }, [formData]);

    const handleSubmit = e => {
        e.preventDefault();
        props.handleUpdatePatch(formData);
    }

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
        <h1> Edit Patch Page </h1>
        <form ref={formRef} autoComplete='off' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Patch Title(required)</label>
					<input
						className='form-control'
						name='title'
						value={formData.title}
						onChange={handleChange}
						required
					/>
				</div>
                <br />
				<div className='form-group'>
					<label>Patch Content</label>
					<input
						className='form-control'
						name='body'
						value={formData.body}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						className='form-control'
						name='date'
						value={formData.date}
						onChange={handleChange}
                        hidden
					/>
				</div>
				<button
					type='submit'
					className='btn btn-xs'
					disabled={invalidForm}
				>
					Update Patch
				</button>
				&nbsp;&nbsp;
				<Link to='/'>CANCEL</Link>
			</form>
        </>
    )
}