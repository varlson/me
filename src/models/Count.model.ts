import { FineType } from "./../types/types";
import mongoose, { Schema, mongo } from "mongoose";
import { CountType, CountTypeModel } from "../types/types";

const CountModel = new Schema<CountTypeModel>({
  monthStatus: {
    type: {
      currentMonth: String,
      totalOfMonth: String,
      totalExpenses: String,
      balance: String,
    },
  },

  fines: {
    type: [
      {
        desc: String,
        status: Boolean,
        value: String,
        resident: String,
      },
    ],
  },

  expenses: {
    type: [
      {
        author: String,
        desc: String,
        value: String,
        date: String,
        link: String,
      },
    ],
  },
  payers: {
    type: [
      {
        name: String,
        status: String,
      },
    ],
  },
});

const HomeCountModel = mongoose.model<CountTypeModel>("HomeCount", CountModel);

export default HomeCountModel;
