import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavSection ,Logo, LogoText ,UlList ,ListItem ,Anchor} from "./style.js"
export default function Navbar() {
    return (
        <NavSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem><NavLink className="links" to="/">Home</NavLink></ListItem>
                    <ListItem><Anchor href="#worklink">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#portlink">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#profilelink">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#aboutlink">About</Anchor></ListItem>
                    <ListItem><NavLink className="links" to="/contact">Contact</NavLink></ListItem>
                </UlList>
                
            </div>
            
        </NavSection>
      
    )
}
