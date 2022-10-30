import React, { useEffect, useState } from "react";


export const UploadFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState();

    const hostUrl = "http://185.225.34.217:5001/upload";

    useEffect(() => {

    }, [uploaded])

    const handleChange = (event) => {
        console.log(event.target.files);
        setSelectedFile(event.target.files[0])
    }

    let data = {}

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const res = await fetch(hostUrl, {
            method: 'POST',
            body: formData
        });
        
        data = await res.json();

        setUploaded(data);

        console.log(data)
    }


    return (
        <>
            <h1>Voice preprocessor</h1>
            <input 
                type='file'
                onChange={ handleChange }
                accept=".mp3, .wav"
            />

            <button onClick={handleUpload}>Upload your voice!</button>

            {selectedFile && (
            <ul>
                <li>Name: {selectedFile.name}</li>
            </ul>
            )}
            
            {data && (
            <ul>
                <li>F0: {uploaded?.F0}</li>
                <li>localShimmer: {uploaded?.localShimmer}</li>
            </ul>
            )}
        </>



    )
}