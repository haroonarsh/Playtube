const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((error) => next(error))
    }
}

export { asyncHandler }


          // hard order functions
// const asyncHandler = () => {}
// const asyncHandler = () => { () => {} }
// const asyncHandler = () => () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).jason({
//             success: false,
//             message: error.message
//         })
//     }
// }