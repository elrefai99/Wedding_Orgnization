import { Request } from 'express'
import DataStord from '../Types/DataStord'

interface RequestAuthintication extends Request {
    user: DataStord
}

export default RequestAuthintication
