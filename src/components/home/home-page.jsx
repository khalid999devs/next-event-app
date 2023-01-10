import Image from 'next/image'
import Link from 'next/link'

export const HomePage = ({ data }) => {
  return (
    <div className='home_body'>
      {data.map((event) => (
        <Link
          href={`/events/${event.id}`}
          key={event.id}
          passHref
          legacyBehavior
        >
          <a className='card'>
            <div className='image'>
              <Image
                width={400}
                height={300}
                src={event.image}
                alt={event.title}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            <div className='content'>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
