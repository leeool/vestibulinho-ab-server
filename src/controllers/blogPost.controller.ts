import { Request, Response } from 'express'


class BlogPost {
  async index(req: Request, res: Response) {
    res.send("Hello World")
  }
}

export default new BlogPost()
