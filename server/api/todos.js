import {Router} from 'express';

const router = Router();
const todos = [
  {text: 'Practice Golang', done: false},
  {text: 'Practice Vue.js', done: false}
];

router.get('/todos', function (req, res, next) {
  res.json(todos);
});

router.get('/todos/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < todos.length) {
    res.json(todos[id]);
  } else {
    res.sendStatus(404);
  }
});

export default router;
