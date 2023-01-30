const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
    apiKey: "YOUR_API_KEY",
});
const openai = new OpenAIApi(configuration);

const app = express();
const port = 3080;

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
