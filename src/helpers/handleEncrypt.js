const bcrypt = require("bcryptjs");

export const handleEncrypt = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
};

export const handleCompare = async (password, encryptPassword) => {
    return await bcrypt.compare(password, encryptPassword);
};
