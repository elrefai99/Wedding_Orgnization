interface UserInterface { 
    _id: string;
    fName: string;
    lName: string;
    fullName: string;
    email: string;
    password: string;
    avatarUrl: string;
    phoneNumber: string;
    address?: {
        streetAddress: string;
        city: string;
        country: string;
    }
    isAdmin: boolean;
    token: string;
}
export default UserInterface;