import express from "express"
import { PrismaClient } from "@prisma/client"


const app = express();


app.get("/user", (req, res) => {
    console.log("works")
    console.log(req)
    res.json({message: "something works"})
})





const prisma = new PrismaClient();

async function hell(){
    const res =  await prisma.student.create({
        data: {
            username: "yashkum096",
            firstName: "Yash2",
            lastName: "Kumar",
            password: "something"
        }
    })
    console.log(res)
}

// hell()

app.listen(3000, () => {
    console.log("Listening at port 3000")
})