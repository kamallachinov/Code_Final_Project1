const Order = require("../Models/order");
// const createError = require("../utils/error");



async function CreateOrder(req, res, next) {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        next(err)
    }
}


async function getOrders(req, res, next) {
    const { userId } = req.params
    try {
        const users = await Order.aggregate([
            {
                $match: {
                    userId
                }
            },
            {
                $lookup: {
                    from: "final_projects",
                    let: {
                        roomId: "$roomId"
                    },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: [
                                        {
                                            $toString: "$_id"
                                        },
                                        "$$roomId"
                                    ]
                                }
                            },
                        },
                        {
                            $project: {
                                name: 1,
                                price: 1
                            }
                        }
                    ],
                    as: "room"
                }
            },
            {
                $unwind: "$room"
            }
        ]);

        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}
async function getOrdersForRoom(req, res, next) {
    const { roomId } = req.query
    console.log(req.query)
    try {
        const rooms = await Order.find({ roomId })
        res.status(200).json(rooms)
    } catch (err) {
        next(err)
    }
}

async function GetOrderById(req, res, next) {
    try {
        const { id } = req.params
        const user = Order.findById(id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

async function UpdateOrderById(req, res, next) {
    try {
        const { id } = req.params
        const updatedOrder = await Order.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json(updatedOrder)
    } catch (err) {
        next(err)
    }
}

async function DeleteOrderById(req, res, next) {
    try {
        const { id } = req.params
        await Order.findByIdAndDelete(id)
        res.status(200).json("Order has been deleted.")
    } catch (err) {
        next(err)
    }
}




module.exports = {
    getOrders, GetOrderById, UpdateOrderById, DeleteOrderById, CreateOrder, getOrdersForRoom
}