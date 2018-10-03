import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Features = () => (
	<Wrapper>
		<Headline>How It Works</Headline>
		<SubHeadline>Party Planning Made Easy!</SubHeadline>
		<FeatureWrapper>
			<Feature>
				<Icon src="assets/img/feature01.svg" alt="Plan Your Party"/>
				<FeatureHeadline>Plan</FeatureHeadline>
				<FeatureText>Use our party planning tools and templates to make planning your next event effortless and fun.</FeatureText>
			</Feature>
			<Feature>
				<Icon src="assets/img/feature02.svg" alt="Send Invitations"/>
				<FeatureHeadline>Invite</FeatureHeadline>
				<FeatureText>Create your guest list, tally RSVPs, and communicate changes to your guests.</FeatureText>
			</Feature>
			<Feature>
				<Icon src="assets/img/feature03.svg" alt="Get Guest Information"/>
				<FeatureHeadline>Prepare</FeatureHeadline>
				<FeatureText>Collect information on your guests such as drink preferences, dietary restrictions, and what they are bringing to share.</FeatureText>
			</Feature>
			<Feature>
				<Icon src="assets/img/feature04.svg" alt="Enjoy the Party"/>
				<FeatureHeadline>Party</FeatureHeadline>
				<FeatureText>We&#39;ll take care of reminding your guests about the party. Once it&#39;s party time, use Social Hour to engage with your guests with games and fun surprises!</FeatureText>
			</Feature>
		</FeatureWrapper>
		<FeatureWrapper>
			<StyledButton text="Sign Up" link="/signup"/>
		</FeatureWrapper>
	</Wrapper>

)

const Wrapper = styled.div`
	background-color: white;
	width: 100%;
	height: 600px;
	position: absolute;
	top: 600px;
	// border-top-left-radius:20%;
	// border-top-right-radius:20%;
	// border-radius: 50%/100px 100px 0 0;
	
`
const FeatureWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 60px;
	// background-color: tomato;
`
const Feature = styled.div`
	padding: 10px;
	margin: 5px 30px;
	text-align: center;
	flex-direction: column;
	width: 20%;
`

const Headline = styled.h1`
	text-align: center;
	padding-top: 20px;
	line-height: 1.2em;
	// background-color: tomato;
	margin-bottom: 0px;
	color: #585858;
	font-size: 2.5em;
`
const SubHeadline = styled.h2`
	color: #9E9E9E;
	text-align: center;
	line-height: 1.2em;
	font-size: 1.2em;
	padding-bottom: 20px;
	// background-color: tomato;
	margin-top: 10px;
	letter-spacing: .15em;
`

const Icon = styled.img`
	height: 60px;
`

const FeatureHeadline = styled.h1`
	font-size: 1.5em;
	font-weight: boldest;
	padding: 15px;
	color: #585858;
`

const FeatureText = styled.p`
	font-size: 1em;
	line-height: 1.5em;
	color: #9E9E9E;
	text-align: center;
`

const StyledButton = styled(Button)`
	display: flex;
	justify-content: center;
	width: 100%;
`

export default Features
