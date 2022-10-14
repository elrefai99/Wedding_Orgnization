import { Request } from "express";
import UserInterface from '../../Interfaces/User/User'

interface RequestAuthintication extends Request {
    user: UserInterface
}

export default RequestAuthintication