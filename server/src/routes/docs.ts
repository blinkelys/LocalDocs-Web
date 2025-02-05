import express from 'express';
const router = express.Router();
import Doc from '../models/Doc';

router.get("/", async (req: express.Request, res: express.Response) => {
    console.log("Fetching docs")
    try {
        const docs = await Doc.find();
        res.status(200).json(docs);
        console.log("Docs fetched")
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    };
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
    console.log("Deleting docs")
    try {
        const docs = await Doc.deleteOne({ _id: req.params.id });
        res.status(200).json(docs);
        console.log("Docs deleted")
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    };
});

module.exports = router