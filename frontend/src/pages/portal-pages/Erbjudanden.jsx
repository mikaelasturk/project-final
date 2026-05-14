import styled from 'styled-components'

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.konto.mainPage.pageTitleClr};
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 40px;
`

export const Erbjudanden = () => {

  return (
    <>
      <PageTitle>Erbjudanden</PageTitle>
    </>
   )
}