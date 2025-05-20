let Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req, res) => {
    
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews",
        populate: {
            path: "author",
        },
    }).populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for doesn't exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 2
      })
        .send();

    let {path: url, filename} = req.file;
    let newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    console.log(response.body.features[0]);
    newListing.geometry = response.body.features[0].geometry;
    
    await newListing.save();
    req.flash("success", "New Listing Created.")
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for doesn't exist");
        res.redirect("/listings");
    }

    let originalImgUrl = listing.image.url;
    originalImgUrl.replace("/uploads", "/uploads/h_100,w_150");
    res.render("listings/edit.ejs", {listing, originalImgUrl});
};

module.exports.updateListing  = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
   
    if(typeof req.file !== "undefined") {
        let {path:url, filename} = req.file;
        let listing = new Listing(req.body.listing);
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated.");
    res.redirect(`/listings/show/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    let deleted = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted.");
    res.redirect(`/listings`);
};