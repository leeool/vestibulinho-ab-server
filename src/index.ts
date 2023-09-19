import Express from "express";
import AppDataSource from "@dataSource";

AppDataSource.initialize().then(() => {
  const app = Express()

  app.get("/", (req, res) => {
    res.send("Hello World")
  })

  app.listen(3000, () => {
    console.log("Server is running on port 3000")
  })

})

