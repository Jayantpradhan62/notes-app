import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

// Note 
export default function Note(props) {
  return (
          <div className='notes' >
            {/* Note title */}
            <h1 onClick={console.log("clicked")}>{props.ttl}</h1>
            {/* Note content */}
            <p>{props.cnt}</p>
            
            {/* Delete button */}
            <button onClick={ () => {props.del(props.id)} }>
                  <div className='ntdlt'>
                  <h4>Delete</h4> 
                  <DeleteSweepIcon fontSize='large'/>
                  </div>
            </button>
        
        </div>
  )
}
