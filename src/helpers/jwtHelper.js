export const getJwtSecretKey = () => {
    const jwtSecretKey = process.env.JWT_SECRET_KEY
    if(!jwtSecretKey){
        throw new Error("JWT_SECRET_KEY is not defined")
    }
    return new TextEncoder().encode(jwtSecretKey);
}