import React, { useState, useEffect } from "react";
import "./SearchBar.css"
 import Request from '../apis/Request'
const SearchBar = () => {
    const [value, setValue] = useState('')
    const [respons, setRespons] = useState([]);

    console.log(respons);

    const onFormHandel = (e) => {
        e.preventDefault()
        // props.value(value)
    }
      const search = async () => {
          const {data}= await Request.get('api.php', {
                params: {
                    srsearch: value
              }
          }); 
            if (data) {
                setRespons(data.query.search)
            }     
        }
    console.log('FRIST  time when run app');

    useEffect(() => {search()}, [value])
    
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
                            <input type="text"
                                onChange={onInPutHadel}
                                value={value}
                                placeholder="search a like at  wikipedia"
                            />
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