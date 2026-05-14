import { PageTitle } from '../../components/typography'
import { useContentStore } from '../../store'

export const Erbjudanden = () => {
   const { erbjudandenContent } = useContentStore()

  return (
    <>
      <PageTitle variant="konto" text={erbjudandenContent.heading}/>
    </>
   )
}