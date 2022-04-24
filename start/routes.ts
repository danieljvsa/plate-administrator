/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get("/plates", "PlatesController.index").middleware("auth");
Route.get("/show-plates", "PlatesController.show");
Route.post("/login", "UsersController.login");
Route.get("/login", "UsersController.showLogin");
Route.post("/register", "UsersController.register");
Route.get("/register", "UsersController.showRegister");
Route.post("/logout", "UsersController.logout");

Route.group(() => {
  Route.get("/new", "PlatesController.create");
  Route.get("/:id/edit", "PlatesController.edit");
  Route.patch("/:id", "PlatesController.update");
  Route.post('/', 'PlatesController.store')
  Route.get('/:id/delete', 'PlatesController.destroy')
}).prefix("plates").middleware("auth");