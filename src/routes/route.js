const express = require('express');
const router = express.Router();

const BookController= require("../controllers/booksController")

router.post("/author",BookController.authorData)
router.post("/sendBook",BookController.sendBooksData)

router.get("/ChetanBooks",BookController.bookBychetanBhagat)

router.post("/updateBooks", BookController.updateBooks)

router.post("/bookprice", BookController.bookprice)





// router.post("/createBook", bookController1.createBook1 )

// router.get("/bookList", bookController1.bookList)

// router.post("/getBooksInYear", bookController1.getBooksInYear)

// router.get("/getParticularBooks", bookController1.getParticularBooks)

// router.get("/getXINRBooks",bookController1.getXINRBooks)

// router.get("/getRandomBooks", bookController1.getRandomBooks)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)



module.exports = router;