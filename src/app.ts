import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import { z } from 'zod'

export const app = fastify()

const prisma = new PrismaClient()

app.post('/user', async (request, reply) => {
  const userSchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    senha: z.string(),
  })

  const { nome, email, senha } = userSchema.parse(request.body)

  await prisma.user.create({
    data: {
      nome,
      email,
      senha_hash: senha,
    },
  })

  return reply.status(201).send()
})

app.get('/user', async (_, reply) => {
  const users = await prisma.user.findMany()

  return reply.send(users)
})
