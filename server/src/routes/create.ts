import express from 'express'
const router = express.Router()
import Doc from '../models/Doc'

router.post("/", async (req: express.Request, res: express.Response)=> {
    const data = req.body;

    console.log(data);

    const tags = data.tags.split(",");

    const newDoc = new Doc({
        title: data.title,
        description: data.description,
        content: data.content,
        tags: tags,
    });

    await newDoc.save();
    console.log("New Doc Created")
})

module.exports = router