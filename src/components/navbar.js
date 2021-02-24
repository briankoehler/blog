import React from 'react'


const Navbar = (props) => {
	return (
		<div>
			<div id='nav-start'>
				<a href='/'>Brian Koehler</a>
			</div>

			<div id='nav-end'>
				<a href='/#about'>About</a>
				<a href='/#projects'>Projects</a>
				<span id='burger'>
					<i class='fas fa-bars fa-2x' onclick='toggleMenu()'></i>
				</span>
			</div>
		</div>
	)
}


export default Navbar
