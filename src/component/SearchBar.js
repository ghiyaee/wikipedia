import React, { useState, useEffect } from "react";
import "./SearchBar.css"
 import Request from '../apis/Request'
const SearchBar = () => {
    const [value, setValue] = useState('adel')
    const [respons, setRespons] = useState([]);
    const onFormHandel = (e) => {
        e.preventDefault()
    }
    const search = async () => {
        const { data } = await Request.get('api.php', {
            params: {
                srsearch: value
            }
        });
        if (data) {
            setRespons(data.query.search)
        }
    };
    useEffect(() => {search()}, [value])
    
    const onInPutHadel = (e) => {
        setValue(e.target.value)
    }
    const onDeleteItem = (index) => {
        const newRespons = [...respons]
        newRespons.splice(index, 1)
        setRespons(newRespons)
    }
    const renderlist = respons.map((el, index) => {
        return (
            <div className="items container "
                key={el.pageid}>
                <div className="title" >
                    {el.title}
                </div >
                <div className="snippet">
                      {el.snippet}  
                </div>
                <div className="time">
                    {el.timestamp}
                </div>
                
                <div>
                   
                    <i className="close link teal icon circular small inverted " onClick={() => onDeleteItem(index)}></i>
                </div>
             
            </div>
        )
    });
    
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