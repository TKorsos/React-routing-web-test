import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Home() {

    const[photo1, setPhoto1] = useState([]);

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/photos/', {
            params: {
                id: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
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
            <h1>Kezdőlap</h1>

            <hr/>
            <div className="content">
                <main>
                    <section className="home">
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