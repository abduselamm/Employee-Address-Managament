import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  gender: String,
  marriage: String,
  address: String,
  selectedFile: String,
  createdAt: { type: Date, default: new Date() },
});

var EmployeeAdress = mongoose.model("EmployeeAdress", employeeSchema);

export default EmployeeAdress;
