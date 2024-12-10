const zod = require('zod')

const createTodoOjb = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodoOjb = zod.object({
    id: zod.string()
})


module.exports = {
    createTodoOjb,
    updateTodoOjb
}