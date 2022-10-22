# Wedding Orgnization

## Available Scripts

In the project directory, you can run:

### `npm start`
### `npm install`
Runs the app in the development mode.\
Open [http://localhost:1999](http://localhost:1999) to view it in the PostMan.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### All Links
```javascript
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
```