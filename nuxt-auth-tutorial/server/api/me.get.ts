import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
  const query = await getQuery(event)

  console.log(query.API_SECRET)
  console.log(process.env.API_SECRET)
  if (query.API_SECRET !== process.env.API_SECRET) {
    throw createError({
      statusCode: 401,
      statusMessage: 'You are not authorized to call this API.'
    })
  }

  const session = await getServerSession(event)
  return session
})
