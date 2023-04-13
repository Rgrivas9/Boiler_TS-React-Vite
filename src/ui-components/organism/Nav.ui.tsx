import styled from 'styled-components'
import Spacing from '../../styles/Spacing'
type NavStyledProps = {
  height?: string
}
const NavStyled = styled.nav<NavStyledProps>`
  height: ${({ height }) => (height ? height : 'min-content')};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: ${Spacing._6} 0;
`
const Nav = ({ height }: NavStyledProps) => {
  return (
    <NavStyled height={height}>
    </NavStyled>
  )
}
export default Nav
