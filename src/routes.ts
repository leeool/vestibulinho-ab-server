import blogPostController from '@controllers/blogPost.controller'
import { Router } from 'express'

const router = Router()

router.get("/blog-post", blogPostController.index)
router.post("/blog-post", blogPostController.store)
router.put("/blog-post/:id", blogPostController.show)
router.put("/blog-post/:id", blogPostController.update)
router.delete("/blog-post/:id", blogPostController.delete)

export default router
