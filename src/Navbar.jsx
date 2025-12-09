import { useState } from 'react';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import EditCalendarSharpIcon from '@mui/icons-material/EditCalendarSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

//Navbar
export default function Navbar(props) {
  // To handle sort toggle
  const [onit, setonit] = useState(false)

  return (
    <div className='navbar'>
      
      {/* Title & logo */}
      <div className='nvb'>
        <EditCalendarSharpIcon className='ntic' fontSize='large' />
         <h1>Notes</h1>
      </div>

      {/* Sort Toggle */}
      <div className={onit ? 'srt2 srt' : 'srt'} onMouseLeave={(() => { setonit(false) })} onMouseOver={() => { setonit(true) }} >
          <SwapVertIcon className='swp' fontSize='large' />
          <h3>Sort</h3>
      </div>

     
     {/* Sort dropbar */}
     <div className={onit ? "sorted" : "sorted2"} onMouseLeave={(() => { setonit(false) })} onMouseOver={() => { setonit(true) }} >
        
        {/* Default */}
        <div className="sort mrgu">
          <label htmlFor="Default"><div className='lbl'>Default</div> </label> 
          <input type="radio" id="Default" name="sort" value="Default" defaultChecked onChange={props.set} />
        </div>
        
        {/* Sort by date added */}
        <div className="sort">
          <label htmlFor="Date-Added"><div className='lbl'>Date-Added</div> </label> 
          <input type="radio" id="Date-Added" name="sort" value="Date-Added" onChange={props.set} />
        </div>

        {/* Sort in alphabetic order */}
        <div className="sort mrgl">
          <label htmlFor="A-Z"><div className='lbl'>A-Z</div> </label> 
          <input type="radio" id="A-Z" name="sort" value="A-Z" onChange={props.set} />
        </div>
      </div>

      
      {/* Search bar */}
      <div className='search'>
        <input type="text" name="srch" id="srch" value={props.search} onChange={props.setsearch}></input>
        <button className='srchlbl' onClick={() => { props.settosearch(true) }}><label htmlFor='srch' >
          <SearchOutlinedIcon fontSize='large' className='srchicon' /></label>
        </button>
      </div>
    </div>
  )
}
