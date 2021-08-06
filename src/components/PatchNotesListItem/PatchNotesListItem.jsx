import {Link} from 'react-router-dom'

export default function PatchNotes({patch, handleDeletePatch}){
    return (
    <div>
        <h2>{patch.title}</h2>
        <div className='date'>{patch.Date}</div>
        <br /><span>{patch.body}</span>
        <br />
                <Link className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: { patch },
                    }}
                    >
                        DETAILS
                    </Link>
            &nbsp; | &nbsp;
        <Link className='btn btn-xs btn-info'
            to={{
                pathname: '/edit',
                state: { patch },
            }}
            >
                Edit
            </Link>
            &nbsp; | &nbsp;
            <button className='btn btn-xs btn-danger margin-left-10' onClick={() => handleDeletePatch(patch._id)}>
                DELETE
            </button>
        <hr />
    </div>
    )
}