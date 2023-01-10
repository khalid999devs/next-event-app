import Image from 'next/image'
import { useState } from 'react'

const SingleEvent = ({ data }) => {
  const [email, setEmail] = useState('')

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!email || !data.id) return

    try {
      const res = await fetch(`/api/email-reg`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          email: email,
        }),
      })

      if (!res.ok) throw new Error(`Error ${res.statusText}`)

      const resData = await res.json()

      if (resData.succeed) {
        setEmail('')
      }
      alert(resData.msg)
    } catch (error) {
      alert(error.message || 'Something went wrong')
    }
  }

  return (
    <div className='single_event'>
      <h1>{data.title}</h1>
      <Image
        width={800}
        height={500}
        src={data.image}
        alt={data.title}
        style={{
          objectFit: 'cover',
          width: '100%',
          maxWidth: '800px',
          height: 'auto',
          maxHeight: '500px',
        }}
        priority
      />

      <p>{data.description}</p>

      <label htmlFor='email'>Get registered for this event!</label>
      <form className='event_form' onSubmit={handleFormSubmit}>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SingleEvent
