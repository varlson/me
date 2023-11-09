export type ExpensesType = {
  author: string;
  desc: string;
  value: string | number;
  date: string;
  link: string;
};

export type MonthStatusType = {
  currentMonth: string;
  totalOfMonth: string | number;
  totalExpenses: string | number;
  balance: string | number;
};

export type ResidentType = {
  name: string;
  status: string | boolean;
};

export type FineType = {
  desc: string;
  status: boolean;
  value: string | number;
  resident: string;
};

export type ConfType = {
  projectId: string;
  client_email: string;
  private_key: string;
  spreadsheetId: string;
};

export type CountType = {
  expenses: ExpensesType[];
  monthStatus: MonthStatusType;
  fines: FineType[];
  payers: ResidentType[];
};

export interface CountTypeModel extends Document {
  expenses: ExpensesType[];
  monthStatus: MonthStatusType;
  fines: FineType[];
  payers: ResidentType[];
}
