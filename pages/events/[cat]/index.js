import CatEvent from '../../../src/components/events/CatEvent'

const EventsCatPage = ({ id, data }) => {
  return <CatEvent id={id} data={data} />
}

export default EventsCatPage

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { allEvents } = await import('/data/data.json')
  const id = context?.params.cat
  const data = allEvents.filter((event) => event.city === id)

  return {
    props: {
      id,
      data,
    },
  }
}
