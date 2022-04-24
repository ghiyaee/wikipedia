import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./SearchBar.css"
 import Request from '../apis/Request'
const SearchBar = () => {
    const [value, setValue] = useState('adel')
    const [respons, setRespons] = useState([]);
    console.log(respons);
    const onFormHandel = (e) => {
        e.preventDefault()
        // props.value(value)
    }
    console.log('FRIST when run app');
    useEffect(() => {
        const search = async () => {
          const {data}= await Request.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: value
              }
          }); 
            if (data) {
                setRespons(data.query.search)
            }     
        }
        search();
    }, [value])
    
    const onInPutHadel = (e) => {
        setValue(e.target.value)
    }
    const loop = respons.map(el => {
        return <div
            style={{ border: '2px solid #777', margin: '10px' }}
            
            key={el.pageid}>
            <div style={{fontSize:"1.5rem" ,fontWeight:"bold"}}>
              {el.title}
            </div>
            {el.timestamp}
             
            <div>
                 {el.snippet}
            </div>
            </div> })
    return (
        <>
        <div className="search-bar">
            <form onSubmit={onFormHandel}>
                <div className="field">
                    <div>
                       <i className="wikipedia w massive  icon"></i>
                        <label style={{fontFamily:"italic"}}>WikiPedia</label>
                    </div>
                    <div>
                        <input type="text" onChange={onInPutHadel} value={value} />
                    </div>
                </div>
            </form>  
            </div >
            <div style={{border:'2px solid #eee' ,marginTop:'7px'}}>
            {loop}
            </div>
            </>
    )
}
export default SearchBar;