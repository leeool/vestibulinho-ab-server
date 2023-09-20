import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("blog_post")
class BlogPost {

  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 100, nullable: false, type: "varchar" })
  title: string

  @Column({ nullable: false, type: "varchar" })
  imageUrl: string

  @Column({ nullable: false, type: "text" })
  content: string

  @Column({ type: "int", default: 0 })
  likes: number

  @Column({ type: "int", default: 1 })
  readingTimeMin: number

  @CreateDateColumn({
    transformer: {
      from: (date: Date) => {
        return date.toLocaleString("pt-BR", {
          localeMatcher: "best fit"
        })
      },
      to: (date: Date) => {
        return new Date()
      }
    }
  })
  createdAt: Date
}

export default BlogPost
