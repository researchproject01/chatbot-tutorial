import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = () => (
	<div>
		<Nav>
			<NavContent>
				<Brand><StyledLink to="/">Social Hour</StyledLink></Brand>
				<NavItem><StyledLink to="/login">Sign In</StyledLink></NavItem>
				<NavItem><StyledLink to="/signup">Sign Up</StyledLink></NavItem>
			</NavContent>
		</Nav>
	</div>
)

const Brand = styled.li`
	margin-right: auto;
	@media all and (max-width: 500px) {
		margin-right: 0;
	}
	display: relative;
	font-size: 2em;
	margin-left: 0;
`
const NavContent = styled.div`
	display: flex;
	padding-top: .5em;
`

const NavItem = styled.li`
	list-style: none;

	@media all and (max-width: 500px) {
		width: 100%;
	}
	&:hover {
		border-bottom: 3px solid #FFF;
	}
`

const StyledLink = styled(Link)`
	color: white;
	padding: 1.5em;
	text-decoration: none;
	-webkit-transition: background-color .5s;
	-o-transition: background-color .5s;
	transition: background-color .5s, color .5s;
	@media all and (max-width: 500px) {
		display: block;
		text-align: center;
	}
`
const Nav = styled.ul`
	margin: 0;
	padding: 1em;
	display: absolute;
	top: 0;
	left: 0;
	color: white;

	@media all and (max-width: 500px) {
		padding: 0;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
			-ms-flex-direction: column;
				flex-direction: column;
		-webkit-box-align: center;
			-ms-flex-align: center;
				align-items: center;
	}
`

export default NavBar
