import { EventsPage as EventsComponents } from '../../src/components/events/EventsPage'

const EventsPage = ({ data }) => {
  return <EventsComponents data={data} />
}

export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')

  return {
    props: {
      data: events_categories,
    },
  }
}
