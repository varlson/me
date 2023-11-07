"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Hello world",
        name: "John Doe",
    });
});
app.listen(8111, () => {
    console.info("Server running at 8111");
});