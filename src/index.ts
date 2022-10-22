import 'dotenv/config'
import express, {Application, Response} from 'express';
import MongoDB from './Database/Mongo.DB';
import setupOther from './Utils/Others/setup.other';
import indexHooks from './Hooks/index.hooks';

const app: Application = express();

// Connect Database MongoDB
MongoDB(app)

// Setup send json and other
setupOther(app)

// Routers
indexHooks(app)

app.get('/', (res: Response) => {
    res.status(200).json({
        status: "OK",
        Number: 200,
        message: "Success",
        message2: "To UnderStand API GO",
        API: {
            Auth:{
                Register: "/register",
                Login: "/login"
            },
            User: {
                Get_Profile: "/user/",
                UpdateProfile: "/user/settings/update",
            },
            Halls: {
                Create_Halls: "/create/halls",
                Get_Single_Page: "/get/:username/hall/:id",
                Get_All_Halls: "/get/all/:types",
                Update_Hall: "/hall/settings/update/:id",
                Delete_Hall: "/hall/settings/delete/:id"
            },
            Cars: {
                Create_Cars: "/create/cars",
                Get_Single_Page: "/get/:username/cars/:id",
                Get_All_Cars: "/get/all/:types",
                Update_Car: "/car/settings/update/:id",
                Delete_Car: "/car/settings/delete/:id"
            }
        }
    })
})