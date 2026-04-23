import { Router } from "express";

const router = Router();

router.get('/data/:name/:id', (req, res) => {
    res.json ({
        query: req.query,
        params: req.params,
    });
});

export default router;