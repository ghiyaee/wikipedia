import React, { useState, useEffect } from "react";
import "./SearchBar.css"
 import Request from '../apis/Request'
const SearchBar = () => {
    const [value, setValue] = useState('adel')
    const [respons, setRespons] = useState([]);
    console.log(respons);
    const onFormHandel = (e) => {
        e.preventDefault()
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
    useEffect(() => {search()}, [value])
    
    const onInPutHadel = (e) => {
        setValue(e.target.value)
    }
    const onDelete = (indexs) => {
         console.log(indexs);
        // const res = respons.filter((e) => e == indexs)
        //    console.log(res);
        // if (res) {
        //     setRespons(respons.splice(res, 1))
        // }
        // console.log(res);
    
      
    }
    const renderlist = respons.map((el,index)=> {
        return <div style={{ border: '2px solid #777', margin: '10px' }}  key={el.pageid}>
                <div style={{fontSize:"1.5rem" ,fontWeight:"bold"}}>
                   {el.title}
                 </div>
                   {el.timestamp}
               <div>
                 {el.snippet}
               </div>
              <i className="close link red icon " onClick={()=>onDelete(index)}></i>
            </div> })
    return (
        <>
            <div className="search-bar">
                <form onSubmit={onFormHandel}>
                    <div className="field">
                        <div>
                            <i className="wikipedia w massive teal icon"></i>
                            <label style={{ fontFamily: "italic" }}>WikiPedia</label>
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
            <div style={{ border: '2px solid #eee', marginTop: '7px' }}>
                {renderlist}
            </div>
        </>
    )
}
export default SearchBar;