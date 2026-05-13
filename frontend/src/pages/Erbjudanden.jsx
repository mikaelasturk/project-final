import styled from 'styled-components'
import { PageTitle } from '../components/reusable/typography/PageTitle'
import { useContentStore } from '../store/contentStore'

export const Erbjudanden = () => {
   const { erbjudandenContent } = useContentStore()

  return (
    <>
      <PageTitle variant="konto" text={erbjudandenContent.heading}/>
    </>
   )
}