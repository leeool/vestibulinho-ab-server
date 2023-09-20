import blogPostController from '@controllers/blogPost.controller'
import { Router } from 'express'


const router = Router()

router.get("/", (req, res) => {
  res.json({ message: "Hello World" })
})

router.get("/blog-post", blogPostController.index)


export default router
