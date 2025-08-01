import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000; 
let posts = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/new", (req, res) => {
    res.render("newpost.ejs");
});

app.post("/new", (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content, date: new Date().toLocaleDateString('en-US') });
    res.redirect("/");
});

app.get("/post/:id", (req, res) => {
    const id = req.params.id;
    if (posts[id]) {
        res.render("post.ejs", { post: posts[id], id });
    } else {
        res.status(404).render("404.ejs");
    }
});

app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    if (posts[id]) {
        res.render("editpost.ejs", { post: posts[id], id });
    } else {
        res.status(404).render("404.ejs");
    }
});

app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    if (posts[id]) {
        const { title, content } = req.body;
        posts[id] = { title, content, date: new Date().toLocaleDateString('en-US') };
        res.redirect(`/post/${id}`);
    } else {
        res.status(404).render("404.ejs");
    }
});

app.post("/delete/:id", (req, res) => {
    const id = req.params.id;
    if (posts[id]) {
        posts.splice(id, 1);
        res.redirect("/");
    } else {
        res.status(404).render("404.ejs");
    }
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.use((req, res) => {
    res.status(404).render("404.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});