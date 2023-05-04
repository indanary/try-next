import styled from "styled-components"

interface CSSJSProps {}

const Title = styled.h1`
	font-size: 50px;
	color: ${({theme}) => theme.colors.primary};
`

const CSSJS: React.FC<CSSJSProps> = ({}) => {
	return <Title>Hello World</Title>
}

export default CSSJS
