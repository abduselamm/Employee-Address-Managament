import express from "express";
import mongoose from "mongoose";

import Employee from "../model/EmployeeAddress.js";
import EmployeeAdress from "../model/EmployeeAddress.js";

const router = express.Router();

export const getEmployees = async (req, res) => {
  try {
    const employees = await EmployeeAdress.find();

    res.status(200).json(employees);
  } catch (error) {
    console.log("I am not working");
    res.status(404).json({ message: error.message });
  }
};

export const getEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await EmployeeAdress.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    gender,
    marriage,
    address,
    selectedFile,
  } = req.body;
  const newEmployeeAddress = new EmployeeAdress({
    firstName,
    lastName,
    email,
    phone,
    gender,
    marriage,
    address,
    selectedFile,
  });

  try {
    await newEmployeeAddress.save();

    res.status(201).json(newEmployeeAddress);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Employee with id: ${id}`);
  await EmployeeAdress.findByIdAndRemove(id);

  res.json({ message: "Employee deleted successfully." });
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    email,
    phone,
    gender,
    marriage,
    address,
    selectedFile,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No Employee with id: ${id}`);
  }

  const updatedEmployee = {
    firstName,
    lastName,
    email,
    phone,
    gender,
    marriage,
    address,
    selectedFile,
    _id: id,
  };
  await EmployeeAdress.findByIdAndUpdate(id, updatedEmployee, { new: true });

  res.json(updatedEmployee);
};

export default router;
