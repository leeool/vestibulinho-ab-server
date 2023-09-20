import Express from "express";
import AppDataSource from "@dataSource";
import router from "@routes"
import cors from "cors"
import "express-async-errors"

AppDataSource.initialize().then(() => {
  const app = Express()

  app.use(Express.json())
  app.use(Express.urlencoded({ extended: true }))

  app.use(cors())

  app.use(router)

  app.listen(3000, () => {
    console.log("🔥 Server is running on http://localhost:3000")
  })

})

