


const express = require('express');
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');


app.use(express.static("public"));
app.use(formidable());

app.post("/create-post", function (req, res) {
    console.log(req.fields);

    const filePath = __dirname + '/data/posts.json';
    const postsContent = fs.readFile(filePath);
    const posts = JSON.parse(postsContent);
    const timestamp = Date.now();
    posts[timestamp] = req.fields.blogpost;
    console.log(posts);

    fs.writeFileSync(filePath, JSON.stringify(posts));

    res.send(200,posts);
});


app.get('/get-posts', function (req, res) {
    res.sendfile(__dirname + "/data/posts.json");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.listen(3000, function () {
    console.log("Server is up running")
});