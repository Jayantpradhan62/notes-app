import { useState } from 'react';
import Writer from './Writer';
import Navbar from './Navbar';
import Note from './Note';
import Footer from './Footer';


export default function App() {
  
  // handles Note title
  const [title, changetitle] = useState("");

  // handles Note id
  const [id, setid] = useState(0);

  // handles Note content
  const [content, changecontent] = useState("");

  // Note added time (used for sorting later)
  const t = new Date().getTime();
  const [added, changeadded] = useState(t);

  // Notes array
  const [works, setworks] = useState([]);
  
  // handles sorting Notes 
  const [sort, setsort] = useState("Default");

  // handles search function
  const [search, changesearch] = useState("");

  // handles search button (to trigger search or not)
  const [tosearch, settosearch] = useState(false);

  // Writes note title
  function chngttl(event) {
    const nttl = event.target.value;
    changetitle(nttl);
  }

  // Writes note content
  function chngcnt(event) {
    const ncnt = event.target.value;
    changecontent(ncnt);
  }

  // Writes search input
  function chngsrch(event) {
    const nsrch = event.target.value;
    changesearch(nsrch);
  }

  // Triggers search function
  function showsrch(arr) {
    if (tosearch === false) {
      return arr;
    }

    else {
      var myarr3 = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].title.slice(0, search.length) === search) {
          myarr3.push(arr[i]);
        }
      }
      return myarr3;
    }
  }

  // adds the note to the notes array
  function chngwrks() {
    var i = id + 1
    const now = new Date().getTime();

    changeadded(now);

    setid(i);
    
    setworks(
      () => [...works, { title: title, content: content, added: added, id: id }]

    );
    
    changetitle("");
    changecontent("");
  
  }
  
  // Delete Note
  function delwrks(id) {
    setworks(
      () => {
        return works.filter(
          (item) => {
            return item.id !== id;

          }
        );
      }
    );
  }

  // Changes sort value in navbar
  function sorting(event) {
    setsort(event.target.value);
  }

  // Sorts the notes array in alphabetical order
  function srt(arr) {
    var myarr2 = arr.slice(0);
    var len = myarr2.length;

    for (var i = 0; i < len - 1; i++) {
      var anchor = myarr2[i];
      var k = i;
      for (var j = i + 1; j < len; j++) {
        
          if (myarr2[j].title < anchor.title) {
            anchor = myarr2[j]
            k = j;
          }

          else if (myarr2[j].title === anchor.title) {
            if (myarr2[j].content < anchor.content) {
              anchor = myarr2[j]
              k = j;
            } 
          }
        }

        if (k !== i) {
          var c = myarr2[i]
          myarr2[i] = anchor
          myarr2[k] = c;

      }
    }
    
    return myarr2;
  }

  
  // Renders sorted notes according to mode set in sort value
  function returnsort(sort) {
    
    // Default sort
    if (sort === "Default") {
      
      return (
        showsrch(works).map(
          (item, index) => {
            return (
              <Note key={index} index={index} id={item.id} ttl={item.title} cnt={item.content} del={delwrks}
              />
            );
          })
        )
      
      }

    // Sort by date-added  
    else if (sort === "Date-Added") {
      var myarr = works;

      return (
        showsrch(myarr).slice(0).reverse().map(
          (item, index) => {
            return (
              <Note key={index} index={index} id={item.id} ttl={item.title} cnt={item.content} ad={item.added} del={delwrks}
              />
            );
          })
        )
      }

    // Sort in alphabetical order  
    else if (sort === "A-Z") {
      
      return (
        srt(showsrch(works).slice(0)).map(
          (item, index) => {
            return (
              <Note key={index} index={index} id={item.id} ttl={item.title} cnt={item.content} del={delwrks}
              />
            );
          })
        )
      }
    
    }



    
  return (
    <div className='app'>
      {/* Navbar */}
      <Navbar set={sorting} sort={sort} search={search}
        setsearch={chngsrch}
        showsearch={showsrch} tosearch={tosearch} settosearch={settosearch} />
      <div className='main'>
        {/* Writer */}
        <Writer
          title={title}
          content={content}
          setitle={chngttl}
          setcontent={chngcnt}
          setwrks={chngwrks}


        />
        {/* Notes */}
        <div className='note'>
          {returnsort(sort)}
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
