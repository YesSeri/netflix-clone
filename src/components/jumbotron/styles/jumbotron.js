import styled from 'styled-components/macro'
import  screenSize  from "../../../utils/cssScreenSize";


export const Item = styled.div`
	display:flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: white;
	overflow: hidden;
`
export const Inner = styled.div`
	display: flex;
	align-items: center;
	flex-direction: ${({ direction }) => direction};
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media (${screenSize.large}){
		flex-direction: column;
	}
`

export const Pane = styled.div`
	width: 50%;
	@media (${screenSize.large})	{
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`
export const Title = styled.h1`
	font-size: 50;
	line-height:1.1;
	margin-bottom: 8px;

	@media (${screenSize.small})	{
		font-size: 35px;
	}
`
export const SubTitle = styled.h2`
	font-size: 26px;
	font-weight: normal; 
	line-height: normal;

	@media (${screenSize.small})	{
		font-size: 18px;
	}
`
export const Image = styled.img`
	max-width: 100%;
	height: auto;
		
`

export const Container = styled.div`
	@media (${screenSize.large}){
		${Item}:last-of-type h2{
			margin-bottom: 50px;
		}

	}
`