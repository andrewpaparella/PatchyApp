import {useState} from 'react';
import * as usersAPI from '../../utilities/users-api';


export default function UserCommentsForm({ handleAddComments, user, profile}) {
    const [formData, setFormData] = useState({
        name: user.name,
        body: '',
        date: Date.now(),
        userId: user._id,
    })

    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddComments(formData);
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
							name='name'
                            value={formData.name}
							readOnly
							hidden
						/>
                         <input
							type='text'
							name='userId'
                            value={formData.userId}
							readOnly
							hidden
						/>
                        <input type='text'
                        name='profileId'
                        value={formData.profileId}
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