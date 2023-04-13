import styled from 'styled-components'
//import { usePageContext } from '../../context/page.Context'
type HeaderStyledProps = {
  height?: string
}
const HeaderStyled = styled.header<HeaderStyledProps>`
  height: ${({ height }) => (height ? height : 'min-content')};
  width: 100%;
`
const Header = ({ height }: HeaderStyledProps) => {
  //const { page } = usePageContext()
  return <HeaderStyled height={height}></HeaderStyled>
}
export default Header
