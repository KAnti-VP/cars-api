import express from 'express'
// import {getAllCars, getCarById, createCar, updateCar, deleteCar} from '../controllers/carsControllers.js'
import * as controller from "../controllers/carsControllers.js"

const router = express.Router()

// router.get("/", getAllCars)
router.get("/", controller.getAllCars)

// router.get("/:id", getCarById)
router.get("/:id", controller.getCarById)

// router.post("/", createCar)
router.post("/", controller.createCar)

// router.put("/:id", updateCar)
router.put("/:id", controller.updateCar)

// router.delete("/:id", deleteCar)
router.delete("/:id", controller.deleteCar)

export default router