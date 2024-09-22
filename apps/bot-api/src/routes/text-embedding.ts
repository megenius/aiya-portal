// import { Hono } from 'hono'
// import { Env } from '../types/env'
// import * as TextEmbeddingHandler from '../handlers/text-embedding.handler'
// import { authMiddleware } from '../middlewares/authentication.middleware'

// const textEmbeddingRoutes = new Hono<Env>()

// textEmbeddingRoutes.use('*', authMiddleware())

// textEmbeddingRoutes.post('/create-index', TextEmbeddingHandler.createIndex)
// textEmbeddingRoutes.post('/add', TextEmbeddingHandler.addDocument)
// textEmbeddingRoutes.get('/search', TextEmbeddingHandler.search)
// textEmbeddingRoutes.delete('/delete/:id', TextEmbeddingHandler.deleteDocument)
// textEmbeddingRoutes.put('/update/:id', TextEmbeddingHandler.updateDocument)

// export { textEmbeddingRoutes }