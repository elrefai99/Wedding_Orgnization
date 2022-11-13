import CarsModel from '../../Models/Cars/cars.model'
import { Request, Response, NextFunction } from 'express'

// Create
const createANewCarController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const UserType = req.user.isCars
        if (UserType === true) {
            // Get User Data
            const owner = req.user.id
            const address = req.user.address.streetAddress + req.user.address.city + ', ' + req.user.address.country
            const phoneNumber = req.user.phoneNumber

            const { car_Model, CarType, cost, image, description, type } = req.body

            const NewCar = await new CarsModel({
                owner,
                phoneNumber,
                address,
                car_Model,
                CarType,
                cost,
                image,
                description,
                type,
            }).save()
            res.status(200).json({ status: 'OK', message: 'success', NewCar })
        } else {
            res.status(404).json('a7a')
        }

        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get Single Page
const getSinglePageController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const Car_Id = req.params.id
        const Find_Single_Car = await CarsModel.findById(Car_Id)

        res.status(200).json(Find_Single_Car)

        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Get All Cars
const getAllCarsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const type_page = req.query.type
        if (type_page === 'car') {
            const get_all_cars = await CarsModel.find()
            res.status(200).json({ status: 'OK', message: 'success', get_all_cars })
        }
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Update car
const updateCarsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const car_id = req.params.id
        await CarsModel.findByIdAndUpdate(car_id, {
            $set: req.body,
        })
        res.status(200).json({ status: 'OK', message: 'success', Update: 'Your car has been updated' })
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// Delete a car
const deleteCarController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const car_id = req.params.id
        await CarsModel.findByIdAndDelete(car_id)
        res.status(200).json({ status: 'OK', message: 'success', Update: 'Your car has been Delete!' })
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export {
    createANewCarController,
    getSinglePageController,
    getAllCarsController,
    updateCarsController,
    deleteCarController,
}
