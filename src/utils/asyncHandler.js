const asyncHandler = (requestHandle) => {
    (req, res, next) => {
        Promise.resolve(requestHandle(req, res, next))
            .catch((error) => next(error))
    }
}

export { asyncHandler }










/* use try and catch method

const asyncHandler = (fn) => {
    async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            })
        }
    }
}
*/