import express from "express";
const router =  express.Router();
import {getAllBooks, getSingleBook} from "../controllers/bookController.js"


router.route("/").get(getAllBooks)

router.route("/:name").get(getSingleBook)

export default router;
