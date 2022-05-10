import mongoose from "mongoose"

mongoose.connect("mongodb+srv://jaovidal1:<123>@cluster0.m1r5j.mongodb.net/desafio-nodeseee")

let db = mongoose.connection;

export default db;