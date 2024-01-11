import bcrypt from 'bcrypt';

export const checkUserPassword = async (user, password) => {
    if (!user || !password) {
        throw new Error('User and password are required.');
    }
    console.log(user);
    console.log(password);
    return bcrypt.compare(password, user.password);
}