export function toJSON (this: any){
    const user = this;
    const userObject = user.toObject();
    delete userObject.__v;
    return userObject;
}