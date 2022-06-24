import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Menu from '../components/menu'
import Navbar from '../components/navbar'
import Term from '../components/term'

const Page = ({pageContext}) => {
  let letter = pageContext.letter
  const termsData = useStaticQuery(graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___slug }) {
      nodes {
        frontmatter {
          ID
          createdAt
          description
          slug
          tag
          title
        }
      }
    }
  }
  `)

  const terms = termsData.allMarkdownRemark.nodes.filter((term) => {
    if(letter) {
      return term.frontmatter.tag === letter;
    } else {
      return term
    }
  })
 
  
    return (
       
      <main >
      <title>{letter} | A to Z</title>
      <div className="flex bg-light min-h-screen">
        <div className="fixed h-full">
          <Menu active={letter}/>
        </div>
        <div className="flex flex-col pl-24 lg:pl-80 pr-10 lg:pr-20 w-full">
        <Navbar/>
        <h1 className="text-xl  md:text-2xl lg:text-5xl max-w-2xl text-blue pt-10 pb-20 font-serif">We've listed all the 
        <span className="font-serif"> terms </span> 
        and <span className="font-serif"> definitions </span> that you'll want to know
        about digital products.</h1>
        <div className="">
        {terms &&
        terms.map((term, index) => ( 
          <Term index={index} term={term.frontmatter} key={index} />
        ))}
        </div>
        </div>       
      </div>      
    </main>
       
    )
}

export default Page
