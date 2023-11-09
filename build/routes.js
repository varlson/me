"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Count_model_1 = __importDefault(require("./models/Count.model"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).json({
        msg: "From api",
    });
});
router.get("/envs", (req, res) => {
    const projectId = process.env.project_id;
    const client_email = process.env.client_email;
    const private_key = process.env.GOOGLE_SECRET_ACCESS_KEY;
    const spreadsheetId = process.env.SHEETS;
    res.status(200).json({
        projectId,
        client_email,
        private_key,
        spreadsheetId,
    });
});
// router.get("/month-status", async (req: Request, res: Response) => {
//   const { googleSheets, auth, spreadsheetId } = await getGoogleAuthSheets();
//   // const { googleSheets, auth, spreadsheetId } = await getGoogleAuthSheets();
//   try {
//     const _balance = await googleSheets.spreadsheets.values.get({
//       auth,
//       spreadsheetId,
//       range: "api!D2:E5",
//     });
//     // const mes = _balance.data.values[0][1];
//     // const saldoInicial = _balance.data.values[1][1];
//     // const despesa = _balance.data.values[2][1];
//     // const saldoAtual = _balance.data.values[3][1];
//     const [
//       [label1, totalOfMonth],
//       [label2, totalExpenses],
//       [label3, balance],
//       [label4, currentMonth],
//     ] = _balance.data.values as any;
//     return res.status(200).json({
//       status: true,
//       //   datas: balance.data,
//       datas: { currentMonth, totalOfMonth, totalExpenses, balance },
//     });
//   } catch (error: any) {
//     return res.status(501).json({
//       status: false,
//       error: error.message,
//     });
//   }
// });
router.post("/data", async (req, res) => {
    const { data } = req.body;
    console.log(data);
    const dados = {
        expenses: data.expenses.data,
        fines: data.fines,
        monthStatus: data.monthStatus,
        payers: data.payers,
    };
    const toSave = new Count_model_1.default(dados);
    const saved = await toSave.save();
    return res.status(200).json({
        data: saved,
        status: true,
    });
});
router.get("/data", async (req, res) => {
    // const { data } = req.body;
    return res.status(200).json({
        data: "data",
        status: true,
    });
});
router.get("/get-count-balance", async (req, res) => {
    try {
        Count_model_1.default.find()
            .then((data) => {
            return res.status(200).json({
                status: true,
                data: data,
            });
        })
            .catch((error) => {
            return res.status(501).json({
                status: false,
                error: error,
            });
        });
    }
    catch (error) {
        return res.status(502).json({
            status: false,
            error: error.message,
        });
    }
});
exports.default = router;
