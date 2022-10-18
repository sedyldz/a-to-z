import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
    return (
        <div className='w-full py-10'>
             <div className="flex w-full text-3xl justify-between ">
                <Link to="/">
                    <StaticImage
                        src="https://dpg.gatsbyjs.io/static/338f5979bb68cf89d73391cc601ff388/ff1c2/logo.png"
                        width={100}
                        placeholder="none"
                        formats={["auto", "webp", "avif"]}
                    />
                 </Link>
                <a href="mailto:merhaba@tio.ist" className="hidden flex-none sm:block bg-blue border text-lg rounded-lg px-10 py-3 text-white hover:bg-white hover:text-blue hover:border-blue hover:border">Get in touch</a>
            </div>
        </div>
    );
};

export default Navbar;