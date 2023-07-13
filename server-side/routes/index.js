const express = require("express");
const UserController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");
const PostController = require("../controllers/postController");
const CategoryController = require("../controllers/categoryController");
const PubController = require("../controllers/pubController");

const router = express.Router();

router.post("/login", UserController.login);
router.post("/register", authentication, UserController.register);
router.get("/posts", authentication, PostController.getPosts);
router.get("/posts/:id", authentication, PostController.getOnePost);
router.put("/posts/:id", authentication, PostController.editPost);
router.delete("/posts/:id", authentication, PostController.deletePosts);
router.post("/posts", authentication, PostController.addPosts);


router.post("/categories", authentication, CategoryController.addCategories);
router.put("/categories/:id", authentication, CategoryController.editCategories);
router.delete("/categories/:id", authentication, CategoryController.deleteCategories);

router.get("/categories", authentication, CategoryController.getCategories);
router.get("/categories/:id", authentication, CategoryController.getOneCategory);

router.get("/pub/posts", PubController.getPostsPub);
router.get("/pub/posts/:slug", PubController.getDetailPostsPub);



module.exports = router;
