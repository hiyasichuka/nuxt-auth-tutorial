export default eventHandler(async (event) => {
  const body = await readBody(event)
  const query = await getQuery(event)

  if (query.API_ROUTE_SECRET !== process.env.API_SECRET) {
    throw createError({
      statusCode: 401,
      statusMessage: 'You are not authorized to call this API.'
    })
  }

  const account = await event.context.prisma.account.findFirst({
    where: {
      user: {
        email: body.email
      }
    }
  })

  return account
})
