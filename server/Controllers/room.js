const Room = require("../Models/room");
const Hotel = require("../Models/hotel");
const createError = require("../utils/error");

async function GetRooms(req, res, next) {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(createError(400, "Not found"));
  }
}
//COUNT BY ROOM TYPE
async function countByRoomType(req, res, next) {
  const x = await Room.aggregate([
    { $group: { _id: "$name", count: { $count: {} } } },
  ]);
  res.status(200).json(x);
}

async function GetRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
}

async function UpdateRoomById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
}

async function DeleteRoomById(req, res, next) {
  try {
    const hotelId = req.params.hotelId;
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
}

async function CreateRoom(req, res, next) {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetRooms,
  GetRoomById,
  UpdateRoomById,
  DeleteRoomById,
  CreateRoom,
  countByRoomType,
};
