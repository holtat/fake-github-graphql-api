import express from 'express';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import schema from '../schema';

const app = express();

const PORT = 3000;

app.use(bodyParser.text({ type: 'application/graphql' }));

app.post('/graphql', (req, res) =>
  graphql(schema, req.body).then(result =>
      res.send(JSON.stringify(result, null, 2))));

app.listen(PORT, () =>
  console.log(`GraphQL listening on port ${PORT}`));
