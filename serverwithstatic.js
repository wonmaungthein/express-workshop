


const express = require('express');
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');


app.use(express.static("public"));
app.use(formidable());


app.post("/create-post", function (req, res) {
    const filePath = __dirname + '/data/posts.json';

    const postsContent = fs.readFileSync(filePath);
    const posts = JSON.parse(postsContent);
    posts[Date.now()] = req.fields.blogpost;
    console.log(posts);


    fs.writeFileSync(filePath, JSON.stringify(posts));

    res.send(200, posts);
});

app.listen(3000, function () {
    console.log("Server is up")
});