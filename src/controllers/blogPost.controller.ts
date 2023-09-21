import BlogPost from '@entities/blogPost.entity'
import blogPostRepo from '@repositories/blogPost.repository'
import { Request, Response } from 'express'

interface BlogPostData {
  title: string
  imageUrl: string
  content: string[]
}

class BlogPostController {
  async index(req: Request, res: Response) {
    const { orderBy } = req.query
    let posts: BlogPost[]

    if (orderBy === "new") {
      posts = await blogPostRepo.find({ order: { createdAt: "ASC" } })
    } else {
      posts = await blogPostRepo.find()
    }

    return res.json(posts)
  }

  async store(req: Request<{}, {}, BlogPostData>, res: Response) {
    const { title, imageUrl, content } = req.body

    if (!title || !imageUrl || !content) {
      return res.status(400).json({ error: "Missing required data" })
    }

    const words = content.join(" ").split(" ").length

    const post = {
      title,
      imageUrl,
      content,
      likes: 0,
      readingTimeMin: Math.round(words / 238)
    }

    await blogPostRepo.save(post)

    return res.sendStatus(201)
  }

  async show(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params

    const post = await blogPostRepo.findOneBy({ id })

    return res.json(post)
  }

  async update(req: Request<{ id: string }, {}, BlogPostData>, res: Response) {
    const { id } = req.params
    const { title, imageUrl, content } = req.body

    const post = await blogPostRepo.findOneBy({ id })

    if (!post) {
      return res.status(404).json({ error: "Post not found" })
    }

    const words = content.join(" ").split(" ").length

    await blogPostRepo.update(id, {
      title: title || post.title,
      imageUrl: imageUrl || post.imageUrl,
      content: content || post.content,
      readingTimeMin: content ? Math.round(words / 238) : post.readingTimeMin
    })
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params

    await blogPostRepo.delete(id)

    return res.sendStatus(200)
  }

  async like(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params


  }
}

export default new BlogPostController()
