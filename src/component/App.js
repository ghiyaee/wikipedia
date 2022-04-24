import React  from  'react'
import SearchBar from "./SearchBar";
import './App.css'
const App = () => {
    
    return  (
        <div>
            <div className='searchbox'>
                <SearchBar/>
            </div>
            <div className='main'>
                <div className='detail'>
               
                </div>
                <div className='list'>
                
                </div>
             </div>
        </div>
    )
}
export default App