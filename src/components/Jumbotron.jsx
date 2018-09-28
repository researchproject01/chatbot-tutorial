import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Jumbotron = (props) => {
	const { image } = props

	return (
		<Wrapper image={image}>
			<Headline>Host your next party on Social Hour</Headline>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: ${props => `url(${props.image}) no-repeat top center`};
	background-size: cover;
	position: relative;
	text-align: center;
	width: 100%;
	height: 800px;
`
const Headline = styled.div`
	text-align: left;
	position: absolute;
	top: 30%;
	left: 10%;
	color: white;
	font-size: 2em;
	max-width: 200px;
`

Jumbotron.propTypes = {
	image: PropTypes.string.isRequired,
}

export default Jumbotron
