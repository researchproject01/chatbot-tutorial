import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'
import NavBar from './NavBar'

const Jumbotron = props => {
	const { image } = props

	return (
		<Wrapper image={image}>
			<NavBar/>
			<HeadlineDiv>
				<Headline>Host your next party on Social Hour</Headline>
				<Button text="Sign Up" link="/signup" primary/>
				<Button text="Sign In" link="/login" primary/>
			</HeadlineDiv>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: ${props => `url(${props.image}) no-repeat center center`};
	background-size: cover;
	position: relative;
	text-align: center;
	width: 100%;
	height: 800px;
`
const HeadlineDiv = styled.div`
	position: absolute;
	top: 30%;
	left: 10%;
	max-width: 330px;
`
const Headline = styled.div`
	text-align: left;
	color: white;
	font-size: 2em;
	margin-bottom: 10px;
`

Jumbotron.propTypes = {
	image: PropTypes.string.isRequired,
}

export default Jumbotron
