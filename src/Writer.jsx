import {useState} from 'react';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


// Note writer
export default function Writer(props) {
  const [rw,setrw] = useState({val : false,rows:"1"});
  
  // Note writer dropdown
  function chngrw(){
    setrw({val: true,rows:"3"});
  }

  return (
    <div className='writer' style={rw.val? ({"height" : "150px"}) : {"height" : "50px"}}>
        <form onClick={(event) => {event.preventDefault()}}>
          {/* Write title  */}
          <input name = "Title" placeholder='Title'  value = {props.title} onChange={props.setitle} onClick={chngrw}></input>
            
          {/* Write content with dropdown animation when title is clicked */}
          { rw.val ? (  <textarea 
                        name = "content" 
                        placeholder='Take a note....' 
                        rows = {rw} 
                        value = {props.content}  
                        onChange={props.setcontent}/>
                      ) 
            
            : null
          
          }
          
          {/* Add button with zoom in animation along with dropdown */}
          <Zoom in = {rw.val}><Fab className='fb' onClick={props.setwrks}><AddIcon fontSize='medium'/></Fab></Zoom> 
        </form>
  </div>
  )
}
