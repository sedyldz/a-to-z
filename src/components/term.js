import React, { useState } from "react";
import { Link } from 'gatsby';

const Term =  ( { term, index } )  => {
    const [gifVisible, setGifVisible] = useState(false)
    return (
        <div className='py-10 max-w-2xl'  key={index} >
            <Link to={"/"+term.slug}>
                <h3 className="pb-5 text-3xl text-blue font-serif term-title">
                    {term.title}
                    {term.gif && 
                        <img className="term-image" src={term.gif} alt={term.title} width="300" />
                    }
                </h3>
                
            </Link>
            <p>{term.description}</p>
        </div>
    );
}

export default Term