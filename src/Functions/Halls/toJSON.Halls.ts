import { toJSON_Halls } from '../../Interfaces/Halls/Halls'

export function toJSON_Halls_Handel(this: toJSON_Halls) {
    const hall = this
    const hallObject = hall.toObject()
    delete hallObject.__v
    return hallObject
}
