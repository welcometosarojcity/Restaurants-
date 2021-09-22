const Restaurant = require('../Models/restaurant');

exports.filterRestaurants = (req, res) => {
    let { mealtype, cuisine, location, lcost, hcost, page, sort } = req.body;
    page = page ? page : 1;
    sort = sort ? sort : 1;

    let filterPayload = {};
    const itemsPerPage = 2;

    let startIndex = itemsPerPage * page - itemsPerPage;
    let endIndex = itemsPerPage * page;

    if (mealtype) {
        filterPayload = {
            mealtype_id: mealtype
        }
    }
    if (mealtype && cuisine) {
        filterPayload = {
            mealtype_id:   mealtype ,
            cuisine_id: { $in: cuisine }
        }
    }
    if (mealtype && hcost && lcost) {
        filterPayload = {
            mealtype_id: mealtype,
            min_price: { $gte: lcost,$lte: hcost }
        }
    }
    if (mealtype && cuisine && lcost && hcost) {
        filterPayload = {
            mealtype_id: mealtype,
            cuisine_id: { $in: cuisine },
            min_price: { $lte: hcost, $gte: lcost }
        }
    }
    if (mealtype && location) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location
        }
    }
    if (mealtype && location && cuisine) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location,
            cuisine_id: { $in: cuisine },
        }
    }
    if (mealtype && location && lcost && hcost) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location,
            min_price: { $lte: hcost, $gte: lcost }
        }
    }
    if (mealtype && location && cuisine && lcost && hcost) {
        filterPayload = {
            mealtype_id: mealtype,
            location_id: location,
            cuisine_id: { $in: cuisine },
            min_price: { $lte: hcost, $gte: lcost }
        }
    }

    Restaurant.find(filterPayload).sort({ min_price: sort })
        .then(response => {  
            // Pagination Logic 
            //const filteredResponse = response.slice(startIndex, endIndex);
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurants: response/*filteredResponse*/ })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}


exports.getRestaurantsByLocation = (req, res) => {
    const { locationId } = req.params;
    Restaurant.find({ location_id: locationId })
        .then(response => {
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurants: response })
        }).catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getRestaurantsDetailsById = (req, res) => {
    const { resId } = req.params;
    Restaurant.findById(resId)
        .then(response => {
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurant: response })
        }).catch(err => {
            res.status(500).json({ error: err })
        })
}



