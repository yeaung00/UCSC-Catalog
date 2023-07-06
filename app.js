const express = require('express');
const app = express();
const cors = require('cors');
const subjectsRouter = require('./controllers/subjectsRouter');
const middleware = require('./lib/middleware');

app.use(express.json());
app.use(cors());

app.get('/', (_, res) => res.redirect('/api/subjects'));
app.use(middleware.getSubjects);
app.use('/api/subjects', subjectsRouter);


app.listen(3001, () => console.log('listening on port http://localhost:3001'))