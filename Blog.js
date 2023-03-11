import React, { useEffect, useState } from "react"
import axios from "axios";

export default function Blog() {

    const[photo1, setPhoto1] = useState([]);

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/photos/', {
            params: {
                id: [1, 2, 3, 4]
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
            <h1>Blog</h1>
            <hr/>
            <div className="content">
                <main>
                    <section>
                        {
                            photo1.map( (it1, index) => {
                                return <React.Fragment key={index}>
                                            <div className="blog">
                                                <img src={it1.thumbnailUrl} alt={it1.id} />
                                                <div className="blog_cim">
                                                    <h3>Cím</h3>
                                                    <p>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe velit voluptatum veritatis provident optio quidem sint ipsum? Ex, odit aperiam expedita, ab ipsam accusantium, maiores praesentium atque minima et nulla!
                                                    </p>
                                                </div>
                                            </div>
                                            <hr/>
                                        </React.Fragment>          
                            })
                        }
                    </section>
                </main>
            </div>
        </div>
    )
}