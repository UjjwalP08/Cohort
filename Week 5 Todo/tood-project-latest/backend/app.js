const express = require("express");
const cors = require("cors");
const typeValidation = require("./type");
const { AddTodo } = require("./Model");
require('dotenv').config()


const app = express();

app.use(express.json());
app.use(cors());


app.post("/todo", async (req, res) => {
    const payload = req.body
    // console.log(payload)
    const isValid = typeValidation.createTodoOjb.safeParse(payload);
    if (isValid.error) {
        res.status(411).json({
            message: "You sent wrong inputs",
            data: isValid,
        });

        return;
    }

    await AddTodo.create(payload);

    return res.status(201).json({
        message: "Todo Add Successfully!!!"
    });
})

app.get("/todo", async (req, res) => {

    const data = await AddTodo.find({});

    return res.status(200).json({
        data
    });

})

app.patch("/todo/completed", async (req, res) => {
    const payload = req.body
    const isValid = typeValidation.updateTodoOjb.safeParse(payload);
    if (isValid.error) {
        res.status(411).json({
            message: "Id is not valid"

        });

        return;
    }

    const data = await AddTodo.findByIdAndUpdate({ _id: payload.id }, {
        isCompleted: true
    })
    return res.status(202).json({
        message: "Todo Update Successfully!!!",
        data
    });
})



app.listen(process.env.PORT, () => {
    console.log(`Server Running at ${process.env.PORT} Port`)
})
