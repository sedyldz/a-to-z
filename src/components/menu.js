import React from 'react';
import { Link } from "gatsby"

const Menu = ({active}) => {

    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    return (
        <div className='flex flex-col p-10 text-blue '>
            {alphabet.map((letter) => {
                if(letter === active ){
                    return <Link className='text-pink' to={"/"+letter}>{letter}</Link>
                }else{
                    return <Link to={"/terms/"+letter}>{letter}</Link>
                }
      
            })}
        </div>
    );
};

export default Menu;