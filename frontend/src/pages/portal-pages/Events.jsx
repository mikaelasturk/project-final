import { EventCard } from '../components/pages/events/EventCard'
import { PageTitle } from '../components/reusable/typography/PageTitle'
import { useContentStore } from '../store/contentStore'


export const Events = () => {
  const { eventContent } = useContentStore()

  return (
    <>
      <PageTitle variant="konto" text={eventContent.heading} />
      <EventCard />
    </>
  )
}

