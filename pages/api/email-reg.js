import path from 'path'
import fs from 'fs'

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath)
  return JSON.parse(jsonData)
}

export default function handler(req, res) {
  const { method } = req

  //accessing the database
  const filePath = buildPath()
  const { events_categories, allEvents } = extractData(filePath)

  if (!allEvents)
    return res.status(404).json({ succeed: false, msg: 'Events not found' })

  if (method === 'POST') {
    const { id: eventId, email } = req.body
    let isEmailThere = false

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) isEmailThere = true

        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        }
      }
      return event
    })

    if (isEmailThere)
      return res.status(401).json({
        msg: 'This mail has already been registered',
        succeed: false,
      })

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    )

    return res
      .status(201)
      .json({ succeed: true, msg: 'Successfully registered for this event' })
  } else {
    return res.status(404).json({
      succeed: false,
      msg: `${method} request not acceptable for this endpoint`,
    })
  }
}
