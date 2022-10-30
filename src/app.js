import React from 'react';
import ReactDOM from 'react-dom';
import { UploadFile } from './components/UploadFile';


function App() {
    return (
        <div className='App'>
            <UploadFile />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));