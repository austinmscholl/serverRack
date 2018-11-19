require("dotenv").config();

const express = require("express");
const app = express();
const sequelize = require("./db");
const bodyParser = require("body-parser");
const port = process.env.PORT;

const shift = require("./controllers/shiftcontroller");
const user = require("./controllers/usercontroller");
const submission = require("./controllers/submissioncontroller");
sequelize.sync(); // {force:true} to reset

app.use(bodyParser.json()); // returns middleware and only looks at requests where the 'Content-Type' header matches 'type' option
app.use(require("./middleware/headers")); //Middleware for authentication

//Exposed routes (authentication subject to individual routes)
app.use("/api/user", user);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
})

//Protected routes (always requires authentication)
app.use(require("./middleware/validate-session"));
app.use("/api/submission", submission);
app.use("/api/shift", shift);

app.listen(port, () => console.log(`Listening on port ${port}`));
