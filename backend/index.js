const express = require('express')
const quizRouter=require("./router/quiz.router");
const cors=require("cors")
const routeNotFound=require("./middleware/routenotfound");
const {loginRouter,signupRouter}=require("./router/auth.router");
const quizzes=require("./db/quizzes");
const categoriesRouter=require("./router/categories.router");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send("hello world");
})
app.use("/quiz",quizRouter);
app.use('/auth/login', loginRouter)
app.use('/auth/signup', signupRouter)
app.use('/categories',categoriesRouter)
app.use(routeNotFound);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})