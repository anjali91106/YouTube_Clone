import jwt from "jsonwebtoken"

const verifyAuthentication = (req, res, next) => {
     const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized, JWT token is required' });
    }

    const token = authHeader.split(' ')[1]; // Extract token after "Bearer"

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.email = decoded.email; //  the token has { email: "..." }
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is expired or invalid!' });
    }
};

export default verifyAuthentication;
