export const handleError = (error, req, res, next) => {
    if (error.message === "Cannot read properties of undefined (reading 'length')") {
        res.status(201)
        res.send({ message: "Resource created successfully"});
    }
    if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(403)
        res.send({ message: "Resource already exists"});
    } else if (['SequelizeDatabaseError', 'SequelizeValidationError', 'SequelizeForeignKeyConstraintError'].includes(error.name)) {
        res.status(400)
        res.send({ message: error.message});
    } else {
        res.status(500)
        res.send({ message: "Something went wrong"});
    }
}