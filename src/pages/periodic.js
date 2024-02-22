

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import TextareaAutosize from "react-textarea-autosize"
import Seo from "../components/seo"
import { navigate } from "gatsby"
import interrogante from "../images/interrogante.png"
//
// ES6
//import Draggable from 'react-draggable'; // The default
//import { DraggableCore } from 'react-draggable'; // <DraggableCore>
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

// CommonJS
//let Draggable = require('react-draggable');
//let DraggableCore = Draggable.DraggableCore;
//
import { graphql } from "gatsby"
//import { RichText } from "prismic-reactjs"
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
    faLinkedin,
    faWeixin,
    faSquareWhatsapp,
    faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons"
import "../components/caja.css"
import "../components/periodic.scss"
import "../components/postit.scss"
//
//



const title = "Contact"

//const Testing = ({ data }) => {
const getLength = ({ length }, minLength) => minLength > length ? minLength : length;

const Periodic = ({ data, minLength = 34 }) => {

    const BlogPosts = () => {
        const posts = data.allPrismicPost.edges
        const results = []
        for (let i = 0; i < 118; i++) {
            results.push(posts[i] || 'placeholder')
        }
        console.log(results)
        function shuffle(array) {
            let currentIndex = array.length, randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex > 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }
        shuffle(results)
        console.log(results)
        if (!posts) return null
        return (
            <div
                style={{
                    display: "flex",
                    gap: ".2vw",
                    margin: "var(--space-5)",
                    maxWidth: "99vw",
                    margin: "auto",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {results.map(post => {
                    return (

                        <div
                            className="flip-card"
                        //key={post.node.id}
                        >
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    {/*
                                    <img src={interrogante} alt="Avatar" style={{ width: "88px", height: "88px", margin: "0" }}></img>
                    */}
                                    <abbr title="Phosphorus">?</abbr>
                                </div>
                                {(() => {
                                    if (!post.node) {
                                        return (
                                            <div class="flip-card-back">
                                                <h2 style={{ margin: "0" }}>Sorry</h2>

                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div class="flip-card-back">
                                                <h2 style={{ margin: "0" }}>{post.node?.data.title.text}</h2>
                                                <p>
                                                    <time>{post.node?.data.date}</time>
                                                </p>
                                                <div style={{ maxWidth: "100px" }} dangerouslySetInnerHTML={{ __html: post.node?.data.content.html }} />
                                            </div>
                                        )
                                    }
                                })()}



                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    


    return (
  <Layout headerChild={title}>
    <>
        <div style={{background: "white", width: "100%;"}}>
            <iframe  height="1240px" src="https://noteforms.com/forms/qa-form-1-81dlmb"></iframe>
            </div>
            <ol class="periodic-table">
            <li class="hydrogen">
                <abbr title="Hydrogen">H</abbr>
            </li>
            <li id="helium" class="noble-gas">
                <abbr title="Helium">He</abbr>
                <span>2</span>
            </li>
            <li class="alkali">
                <abbr title="Lithium">Li</abbr>
            </li>
            <li class="alkaline">
                <abbr title="Beryllium">Be</abbr>
            </li>
            <li id="boron" class="metalloid">
                <abbr title="Boron">B</abbr>
            </li>
            <li class="polyatomic-non-metal">
                <abbr title="Carbon">C</abbr>
            </li>
            <li class="diatomic-nonmetal">
                <abbr title="Nitrogen">N</abbr>
            </li>
            <li class="diatomic-nonmetal">
                <abbr title="Oxygen">O</abbr>
            </li>
            <li class="diatomic-nonmetal">
                <abbr title="Fluorine">F</abbr>
            </li>
            <li class="noble-gas">
                <abbr title="Neon">Ne</abbr>
            </li>
            <li class="alkali">
                <abbr title="Sodium">Na</abbr>
            </li>
            <li class="alkaline">
                <abbr title="Magnesium">Mg</abbr>
            </li>
            <li id="aluminium">
                <abbr title="Aluminium">Al</abbr>
            </li>
            <li class="metalloid">
                <abbr title="Silicon">Si</abbr>
            </li>
            <li class="polyatomic-non-metal">
                <abbr title="Phosphorus">P</abbr>
            </li>
            <li class="polyatomic-non-metal">
                <abbr title="Sulphur">S</abbr>
            </li>
            <li class="diatomic-nonmetal">
                <abbr title="Chlorine">Cl</abbr>
            </li>
            <li class="noble-gas">
                <abbr title="Argon">Ar</abbr>
            </li>
            <li class="alkali">
                <abbr title="Potassium">K</abbr>
            </li>
            <li class="alkaline">
                <abbr title="Calcium">Ca</abbr>
            </li>
            <li>
                <abbr title="Scandium">Sc</abbr>
            </li>
            <li>
                <abbr title="Titanium">Ti</abbr>
            </li>
            <li>
                <abbr title="Vanadium">Ti</abbr>
            </li>
            <li>
                <abbr title="Chromium">Cr</abbr>
            </li>
            <li>
                <abbr title="Manganese">Mn</abbr>
            </li>
            <li>
                <abbr title="Iron">Fe</abbr>
            </li>
            <li>
                <abbr title="Cobalt">Co</abbr>
            </li>
            <li>
                <abbr title="Nickel">Ni</abbr>
            </li>
            <li>
                <abbr title="Copper">Cu</abbr>
            </li>
            <li>
                <abbr title="Zinc">Zn</abbr>
            </li>
            <li>
                <abbr title="Gallium">Ga</abbr>
            </li>
            <li class="metalloid">
                <abbr title="Germanium">Ge</abbr>
            </li>
            <li class="metalloid">
                <abbr title="Arsenic">As</abbr>
            </li>
            <li class="polyatomic-non-metal">
                <abbr title="Selenium">Se</abbr>
            </li>
            <li class="diatomic-nonmetal">
                <abbr title="Bromide">Br</abbr>
            </li>
            <li class="noble-gas">
                <abbr title="Krypton">Kr</abbr>
            </li>
            <li class="alkali">
                <abbr title="Rubidium">Rb</abbr>
            </li>
            <li class="alkaline">
                <abbr title="Strontium">Sr</abbr>
            </li>
            <li>
                <abbr title="Yttrium">Y</abbr>
            </li>
            <li>
                <abbr title="Zirconium">Zr</abbr>
            </li>
            <li>
                <abbr title="Niobium">Nb</abbr>
            </li>
            <li>
                <abbr title="Molybdenum">Mo</abbr>
            </li>
            <li>
                <abbr title="Technetium">Tc</abbr>
            </li>
            <li>
                <abbr title="Ruthenium">Ru</abbr>
            </li>
            <li>
                <abbr title="Rhodium">Ro</abbr>
            </li>
            <li>
                <abbr title="Palladium">Pd</abbr>
            </li>
            <li>
                <abbr title="Silver">Ag</abbr>
            </li>
            <li>
                <abbr title="Cadmium">Cd</abbr>
            </li>
            <li>
                <abbr title="Indium">In</abbr>
            </li>
            <li>
                <abbr title="Tin">Sn</abbr>
            </li>
            <li class="metalloid">
                <abbr title="Antimony">Sb</abbr>
            </li>
            <li class="metalloid">
                <abbr title="Tellurium">Te</abbr>
            </li>
            <li class="diatomic-nonmetal">
                <abbr title="Iodine">I</abbr>
            </li>
            <li class="noble-gas">
                <abbr title="Xenon">Xe</abbr>
            </li>
            <li class="alkali">
                <abbr title="Caesium">Cs</abbr>
            </li>
            <li class="alkaline">
                <abbr title="Barium">Ba</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Lanthanum">La</abbr>
            </li>
            <li id="cerium" class="lanthanide">
                <abbr title="Cerium">Ce</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Praseodymium">Pr</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Neodymium">Nd</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Promethium">Pm</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Samarium">Sm</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Europium">Eu</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Gadolinium">Gd</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Terbium">Td</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Dysprosium">Dy</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Holmium">Ho</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Erbium">Er</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Thulium">Tm</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Ytterbium">Yb</abbr>
            </li>
            <li class="lanthanide">
                <abbr title="Lutetium">Lu</abbr>
            </li>  
            <li id="hafnium">
                <abbr title="Hafnium">Hf</abbr>
            </li>
            <li>
                <abbr title="Tantalum">Ta</abbr>
            </li>
            <li>
                <abbr title="Tungsten">W</abbr>
            </li>
            <li>
                <abbr title="Rhenium">Re</abbr>
            </li>
            <li>
                <abbr title="Osmium">Os</abbr>
            </li> 
            <li>
                <abbr title="Iridium">Ir</abbr>
            </li>
            <li>
                <abbr title="Platinum">Pt</abbr>
            </li>
            <li>
                <abbr title="Gold">Au</abbr>
            </li>
            <li>
                <abbr title="Mercury">Hg</abbr>
            </li>
            <li>
                <abbr title="Thallium">Tl</abbr>
            </li>
            <li>
                <abbr title="Lead">Pb</abbr>
            </li>
            <li>
                <abbr title="Bismuth">Bi</abbr>
            </li>
            <li>
                <abbr title="Polonium">Po</abbr>
            </li>
            <li class="metalloid">
                <abbr title="Astatine">At</abbr>
            </li>
            <li class="noble-gas">
                <abbr title="Radon">Rn</abbr>
            </li>
            <li class="alkali">
                <abbr title="Francium">Fr</abbr>
            </li>
            <li class="alkaline">
                <abbr title="Radium">Ra</abbr>
            </li>
            <li class="actinide">
                <abbr title="Actinium">Ac</abbr>
            </li>
            <li class="actinide" id="thorium" >
                <abbr title="Thorium">Th</abbr>
            </li>
            <li class="actinide">
                <abbr title="Protactinium">Pa</abbr>
            </li>
            <li class="actinide">
                <abbr title="Uranium">U</abbr>
            </li>
            <li class="actinide">
                <abbr title="Neptunium">Np</abbr>
            </li>
            <li class="actinide">
                <abbr title="Plutonium">Up</abbr>
            </li>
            <li class="actinide">
                <abbr title="Americium">Am</abbr>
            </li>
            <li class="actinide">
                <abbr title="Curium">Cm</abbr>
            </li>
            <li class="actinide">
                <abbr title="Berkelium">Bk</abbr>
            </li>
            <li class="actinide">
                <abbr title="Californium">Cf</abbr>
            </li>
            <li class="actinide">
                <abbr title="Einsteinium">Es</abbr>
            </li>
            <li class="actinide">
                <abbr title="Fermium">Fm</abbr>
            </li>
            <li class="actinide">
                <abbr title="Mendelevium">Md</abbr>
            </li>
            <li class="actinide">
                <abbr title="Nobelium">No</abbr>
            </li>
            <li class="actinide">
                <abbr title="Lawrencium">Lr</abbr>
            </li>
            <li id="rutherfordium">
                <abbr title="Rutherfordium">Rf</abbr>
            </li>
            <li>
                <abbr title="Dubnium">Db</abbr>
            </li>
            <li>
                <abbr title="Seaborgium">Sg</abbr>
            </li>
            <li>
                <abbr title="Bohrium">Bh</abbr>
            </li>
            <li>
                <abbr title="Hassium">Hs</abbr>
            </li>
            <li class="unknown">
                <abbr title="Meitnerium">Mt</abbr>
            </li>
            <li class="unknown">
                <abbr title="Darmstadtium">Ds</abbr>
            </li>
            <li class="unknown">
                <abbr title="Roentgenium">Rg</abbr>
            </li>
            <li>
                <abbr title="Copernicium">Cn</abbr>
            </li>
            <li class="unknown">
                <abbr title="Nihonium">Cn</abbr>
            </li>
            <li class="unknown">
                <abbr title="Flerovium">Fl</abbr>
            </li>
            <li class="unknown">
                <abbr title="Moscovium">Mc</abbr>
            </li>
            <li class="unknown">
                <abbr title="Livermorium">Lv</abbr>
            </li>
            <li class="unknown">
                <abbr title="Tennessine">Ts</abbr>
            </li>
            <li class="unknown">
                <abbr title="Oganesson">Og</abbr>
            </li>
            </ol>
            <div class="post-it yellow">
                <p>Hey, this is a cool Post-it note</p>
            </div>
            <div class="post-it blue">
                <p>Hey, this is a cool Post-it note</p>
            </div>
            <div class="post-it red">
                <p>Hey, this is a cool Post-it note</p>
            </div>

    <BlogPosts></BlogPosts>
            
           
                
            </>
    
  </Layout>
)
      }
export const Head = () => <Seo title={title} />


export const query = graphql`
query hello {
  allPrismicPost {
    edges {
      node {
        data {
          date
          title {
            text
          }
          content {
            html
            richText
          }
        }
        dataRaw
        id
        uid
      }
    }
  }
}
`
export default Periodic