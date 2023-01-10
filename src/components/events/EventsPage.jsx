import Image from 'next/image'
import Link from 'next/link'

const EventsPage = ({ data }) => {
  return (
    <div className='events_page'>
      {data.map((event) => {
        const { id, title, image } = event
        return (
          <Link href={`/events/${id}`} key={id} passHref legacyBehavior>
            <a className='card'>
              <Image
                width={350}
                height={300}
                src={image}
                alt={title}
                className='card_img'
                priority
              />
              <h2>{title}</h2>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export { EventsPage }
