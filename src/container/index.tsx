import * as S from './style'

type Props = {
  childrenOne : React.ReactNode,
  childrenTwo : React.ReactNode,
}

const Container = ({ childrenOne, childrenTwo } : Props) => (
  <S.Container>
    {childrenOne}
    {childrenTwo}
  </S.Container>
)

export default Container


