import { Application, Request ,Response } from "express";

export default (app: Application) =>{
    app.get('/', (_req:Request, res: Response) => {
        try{
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
        }catch(err){
            res.status(500).json({message: err});
        }
    })
    app.get("*", (_req, res) => {
        res.status(404).json({ err: "Not Found" });
    });
}