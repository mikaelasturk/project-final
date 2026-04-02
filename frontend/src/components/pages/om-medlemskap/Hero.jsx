import styled from 'styled-components'
import { PageTitle } from '../../reusable/typography/PageTitle'
import { useContentStore } from '../../../store/contentStore'

const HeroWrapper = styled.section`
  width: 100%;
`

const Background = styled.div`
  position: relative;
  height: 40vh;
  min-height: 280px;
  background-image: ${props => `url("${props.bg}")`};
  background-size: cover;
  background-position: center 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    height: 65vh;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: ${({theme}) => theme.omMedlemskap.txtClr};
  text-align: center;
  padding: 0 1rem;
`

export const Hero = () => {
  const { content } = useContentStore()
  const filename = '1 (286).jpg'
  const img = `/media/images/${encodeURIComponent(filename)}`

  return (
    <HeroWrapper>
      <Background bg={img}>
        <Overlay />
        <Content>
          <PageTitle text={content.hero} variant="hero"/>
        </Content>
      </Background>
    </HeroWrapper>
  )
}