import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Button = props => {
	const { text, link } = props

	return (
		<LinkWrapper>
			<StyledLink to={link}>{text}</StyledLink>
		</LinkWrapper>
	)
}

const LinkWrapper = styled.div`
	float: left;
	margin: 10px 0px;
`
const StyledLink = styled(Link)`
	&:focus, &:hover, &:visited, &:link, &:active {
		text-decoration: none;
	}
	&:hover {
		background-color: #FFF;
		transition: all .5s;
		color: #f14572;
	}
	border: 3px solid #FFF;
	color: #FFF;
	display: inline-block;
	font-size: 18px;
	letter-spacing: 0;
	text-align: center;
    text-decoration: none;
	padding: 10px 0;
	width: 175px;
`

Button.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default Button
