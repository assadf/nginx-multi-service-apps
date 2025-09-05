import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('Hello World from the Node/Express');
});

export default router;