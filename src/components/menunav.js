import * as React from "react"
import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"



const LinksMenu = [
    {
        text: "Home",
        url: "/",
        description: "faLinkedin",
    },
    {
        text: "About",
        url: "/about",
        description: "fas faSquareWhatsapp",
    },
    {
        text: "Contact",
        url: "/contact",
        description: "faLinkedin",
    },
    {
        text: "Sketches",
        url: "/sketches",
        description: "fas faSquareWhatsapp",
    },
    {
        text: "Ideas",
        url: "/ideas",
        description: "faSquareInstagram",
    },
    {
        text: "Periodic",
        url: "/periodic",
        description: "fas faSquareWhatsapp",
    },
    {
        text: "Projects",
        url: "/projects",
        description: "fas faSquareWhatsapp",
    },
    {
        text: "Window",
        url: "/window",
        description: "fas faSquareWhatsapp",
    },
]


const Nav = () => (
   <>
       {LinksMenu.map((item, index) => (
            <React.Fragment key={index}>
                <Link
                    style={{
                        //fontFamily: "Henken Grotesk",
                        padding: "4px 16px",
                        fontSize: "18px",
                        background: "#f3f3f3",
                        borderRadius: "8px",
                        fontWeight: "700",
                        color: "#000",
                        textDecoration: "none",
                        lineHeight: "100%",
                    }}
                    to={item.url}
                 >
                {item.text}
                </Link>
                
                {/**
                 * 
                 * <Link
        style={{
          //fontFamily: "Henken Grotesk",
          padding: "4px 16px",
          fontSize: "18px",
          background: "#f3f3f3",
          borderRadius: "8px",
          fontWeight: "700",
          color: "#000",
          textDecoration: "none",
        }}
        to="/"
      >
        Projects{" "}
      </Link>
                 */}
            </React.Fragment>
        )) }      
        </>
)

export default Nav