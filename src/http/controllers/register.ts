import type { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { RegisterUseCase } from '@/use-cases/register'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const userSchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    senha: z.string(),
  })

  const { nome, email, senha } = userSchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)
    await registerUseCase.execute({
      email,
      nome,
      senha,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}
