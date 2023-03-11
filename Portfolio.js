import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Portfolio() {

    const[photo1, setPhoto1] = useState([]);

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/photos/', {
            params: {
                id: [5, 6, 7, 8, 9]
            },
            paramsSerializer: {
                indexes: null
            }
        })
            .then( res => {
                setPhoto1( res.data )
            })
    }, [])

    return (
        <div className="container">
            <h1>Portfólió</h1>
            <hr/>
            <div className="content">
                <main>
                    <section className="portfolio">
                        {
                            photo1.map( (it1, index) => {
                                return <React.Fragment key={index}>
                                                <img src={it1.thumbnailUrl} alt={it1.id} />
                                        </React.Fragment>          
                            })
                        }
                    </section>
                </main>
            </div>
        </div>
    )
}