import AppDataSource from "@dataSource";
import BlogPost from "@entities/blogPost.entity";

const blogPostRepo = AppDataSource.getRepository(BlogPost)

export default blogPostRepo
