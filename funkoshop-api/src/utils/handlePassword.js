import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async(password) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword //podríamos hacerlo directamente en una línea, con return await... etc
};

export const checkPassword = async(originalPassword, hashedPassword) => {
    const passwordMatch = await bcrypt.compare(originalPassword, hashedPassword)
    return passwordMatch
};