import express from "express";
const router =  express.Router();
import {getAllBooks, getSingleBook} from "../controllers/bookController.js"


router.route("/").get(getAllBooks)

router.route("/:id").get(getSingleBook)

export default router;
