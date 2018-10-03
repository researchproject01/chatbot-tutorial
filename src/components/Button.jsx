import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Button = props => {
	const { text, link, primary } = props

	return (
		<LinkWrapper>
			<StyledLink to={link} primary={primary}>{text}</StyledLink>
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
		background-color: ${props => props.primary ? '#FFF' : '#f14572'};
		transition: all .5s;
		color: ${props => props.primary ? '#f14572' : '#FFF'};
	}
	border: ${props => props.primary ? '3px solid #FFF' : '3px solid #000'};
	color: ${props => props.primary ? '#FFF' : '#000'};
	display: inline-block;
	font-size: 18px;
	letter-spacing: 0;
	text-align: center;
    text-decoration: none;
	padding: 10px 0;
	width: 175px;
`

Button.defaultProps = {
	primary: false,
}

Button.propTypes = {
	link: PropTypes.string.isRequired,
	primary: PropTypes.bool,
	text: PropTypes.string.isRequired,
}

export default Button
