import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import key from "../../key"
import axios from "axios"


export default function BookPage() {

    //Fetching the specific book for the bookPage

    let params = useParams() //take any think that is after the colon ('/book/:id'). after :
    //we are going to use this ID to performance another fetch to give us the information about the book we selected
    console.log(params)
    let id = params.id

    let [pageData, setPageData] = useState({})

    let url = "https://www.googleapis.com/books/v1/volumes/" + id + '?&key=' + key //I took this link API

    useEffect(() => {
        axios.get(url)
            .then(r => setPageData(r.data))
    }, [])






    return (
        <div className='mainContainer' >
            <div className='sideBar'  > sidebar</div>
            <div className='display' >
                <div className='bookPageCard'>
                    <div className='bookPageCardCover' > left </div>
                    <div className='bookPageCardInformation' > right </div>
                </div>

            </div>
        </div>
    )
}