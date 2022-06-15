const res = require("express/lib/response");
const fs = require ("fs");
const path = require ("path");

const controller = {
    index: (req, res) => {
        return res.render("index")
    },

    login: (req, res) => {
        return res.render("login")
    },

    shop: (req, res) => {
        return res.render("shop")
    },

    register: (req, res) => {
        return res.render("register")
    },

    cart: (req, res) => {
        return res.render("cart")
    },

    productDetail: (req, res) => {
        return res.render("productdetail")
    },

    productForm: (req, res) => {
        return res.render("productForm")
    }
}

module.exports=controller;