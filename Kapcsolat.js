import React, { useState } from "react";

export default function Kapcsolat() {

    const[data, setData] = useState( { name: '', email: '', tel: '', message: '' } );

    const handleChange = (e) => {
        setData( { ...data, [e.target.name]: e.target.value } );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("http://localhost/react/my-first-app/src/feldolgozo.php", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify( data )
        })
    }

    return (
        <div className="container">
            <h1>Kapcsolat</h1>
            <hr/>
            <form id="kapcsolat" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Név</label>
                    <input type="text" id="name" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="tel">Telefonszám</label>
                    <input type="tel" id="tel" name="tel" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Üzenet</label>
                    <textarea rows="5" id="message" name="message" onChange={handleChange} />
                </div>
                <div>
                    <label></label>
                    <input type="submit" id="sub_btn" />
                </div>
            </form>
        </div>
    )
}