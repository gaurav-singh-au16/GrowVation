import React, { useState } from 'react'
import Books from './books'
import Navbar from '../../components/Navbar'



function Gallery() {
    const state = {
        title : "Like",
        status : false
    }
    const [buttonText, setButtonText] = useState("Like")
    const changeText = (text) => setButtonText(text);
    // const likeBook = () => {
    //     return setTitle({
    //         title:'Liked'
    //     })
    // }
    // console.log(state.title)

    

    return (
        <>
        <Navbar />
            <div className='container mx-5 mt-5 row'>
            {Books.map(prod => (

                <div className="card col-4 m-1">
                <img src={prod.thumbnailUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{prod.authors}</h5>
                    <a href="#" className="btn btn-primary m-2"
                    onClick={() => changeText("Liked")}
                    >{buttonText}</a>
                    <a href="#" className="btn btn-primary">{}</a>
                </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Gallery
