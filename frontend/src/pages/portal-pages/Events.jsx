import { EventCard } from '../../components/pages/events/EventCard'
import { PageTitle } from '../../components/typography'
import { useContentStore } from '../../store'


export const Events = () => {
  const { eventContent } = useContentStore()

  return (
    <>
      <PageTitle variant="konto" text={eventContent.heading} />
      <EventCard />
    </>
  )
}

