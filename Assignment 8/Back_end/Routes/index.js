const express = require('express');

const route = express.Router();

const locationController = require('../Controllers/locations');
const mealtypeController = require('../Controllers/mealtypes');
const restaurantController = require('../Controllers/restaurant');
const menuItemsController = require('../Controllers/menuItems');
const paymentController = require('../Controllers/payment');
const userController = require('../Controllers/users');

route.get('/locations', locationController.getLocations);
route.get('/mealtypes', mealtypeController.getMealTypes);
route.get('/restaurants/:locationId', restaurantController.getRestaurantsByLocation);
route.post('/filter', restaurantController.filterRestaurants);
route.get('/restaurant/:resId', restaurantController.getRestaurantsDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByRestaurant);
route.post('/payment', paymentController.payment);
route.post('/callback', paymentController.callback);
route.post('/login',userController.getLogin);
route.post('/signup',userController.createLogin);


// login user
// signup user

module.exports = route;