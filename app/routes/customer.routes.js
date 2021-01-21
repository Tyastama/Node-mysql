module.exports = app => {
  const users = require("../controllers/customer.controller.js");

  // Create a new Users
  app.post("/users", users.create);

  // Retrieve all Users
  app.get("/users", users.findAll);

  // Retrieve a single User with userId
  app.get("/users/:userId", users.findOne);

  // Update a User with userId
  app.put("/users/:userId", users.update);

  // Delete a User with userId
  app.delete("/users/:usersId", users.delete);

  // Create a new User
  app.delete("/users", users.deleteAll);
};
