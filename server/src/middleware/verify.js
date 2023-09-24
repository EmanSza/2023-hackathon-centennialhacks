const VerifyUser = (roles) => {
    return (req, res, next) => {
        if(!req.Authenticated) return res.status(401).json({
            message: "You are not authorized to view this resource",
            success: false
        });
        if(!roles.includes(req.user.roles)) return res.status(401).json({
            message: "You are not authorized to view this resource",
            success: false
        });
        next();
    }
}

module.exports = VerifyUser;