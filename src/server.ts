import { fastifyCors } from '@fastify/cors'
import { fastifyMultipart } from '@fastify/multipart'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { createQuestionRoute } from './http/routes/create-question.ts'
import { createRoomsRouts } from './http/routes/create-room.ts'
import { getRoomsQuestions } from './http/routes/get-room-questions.ts'
import { getRoomsRouts } from './http/routes/get-rooms.ts'
import { uploadAudioRoute } from './http/routes/upload-audio.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyMultipart)

app.get('/health', () => {
  return 'OK'
})

app.register(getRoomsRouts)
app.register(createRoomsRouts)
app.register(getRoomsQuestions)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({ port: env.PORT })
