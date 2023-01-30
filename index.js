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
    const { message, currentModel } = req.body;
    const response = await openai.createCompletion({
      model: `${currentModel}`,
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    res.json({
      message: response.data.choices[0].text,
    })
})

app.get('/models', async (_req, res) => {
  const response = await openai.listEngines();
  res.json({
    models: response.data.data,
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
