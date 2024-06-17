'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/todos',
      handler: 'todo.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/todos/:id',
      handler: 'todo.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/todos',
      handler: 'todo.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/todos/:id',
      handler: 'todo.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/todos/:id',
      handler: 'todo.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
