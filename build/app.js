"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "Hello world",
        name: "John Doe",
    });
});
app.use("/api", routes_1.default);
app.listen(8111, async () => {
    const url = process.env.DATABASE_URL;
    mongoose_1.default
        .connect(url)
        .then(() => {
        console.info("Server running at 8111");
    })
        .catch((error) => {
        console.info("server cant be started");
        console.info(error);
    });
});
