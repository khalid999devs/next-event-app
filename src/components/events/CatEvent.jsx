import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CatEvent = ({ id, data }) => {
  return (
    <div className='cat_events'>
      <h1>Event in {id}</h1>

      <div className='content'>
        {data.map((ev) => {
          return (
            <Link
              key={ev.id}
              href={`${id}/${ev.id}?name=Khalid&roll=fsdfs`} //can pass queries like state values
              as={`${id}/${ev.id}`} //hiding the queries
              passHref
              legacyBehavior
            >
              <a className='card'>
                <Image
                  width={300}
                  height={300}
                  src={ev.image}
                  alt={ev.title}
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default CatEvent
