import express from 'express';

const Router = express.Router();

Router.get('/', (req, res) => {
  return res.render('index.html');
});

export default Router;
