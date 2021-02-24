import React from 'react'
import styled from 'styled-components'


const NavbarContainer = styled.div`
    margin-top: 5vh !important;
    margin-bottom: 10vh !important;
    margin: auto;
    width: 60%;
    display: flex;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: lightgray;
        font-size: 1.5rem;

        &:hover {
            color: white;
        }
    }

    #nav-start a {
        font-weight: 500;
        letter-spacing: 2px;
    }

    #nav-end a + a {
        margin-left: 24px; /* This is 20px on my portfolio, but that didn't match... */
    }
`


const Navbar = () => {
	return (
		<div>
            <NavbarContainer>
                <div id='nav-start'>
                    <a href='/'>Brian Koehler</a>
                </div>

                <div id='nav-end'>
                    <a href='/#about'>About</a>
                    <a href='/#projects'>Projects</a>
                </div>
            </NavbarContainer>
		</div>
	)
}


export default Navbar
