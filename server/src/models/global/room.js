import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class RoomGlobal extends Model {
    roomId;
    hotelId;
    roomNumber;
    floor;
    description;
    type;
    price;
    smoking;
}

RoomGlobal.init(
  {
    roomId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: true,
      field: "ROOM_ID",
    },
    hotelId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "HOTEL_ID",
    },
    roomNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "ROOM_NUMBER",
    },
    floor: {
      type: DataTypes.NUMBER,
      allowNull: true,
      field: "FLOOR",
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "DESCRIPTION",
    },
    type: {
      type: DataTypes.STRING(100),
      values: ['Deluxe', 'Suite', 'Standard', 'Twin', 'Family', 'Double', 'Single'],
      allowNull: true,
      field: "TYPE",
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: true,
      field: "PRICE",
    },
    smoking: {
      type: DataTypes.NUMBER,
      values: [0, 1],
      allowNull: true,
      field: "SMOKING",
    },
  },
  {
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "RoomGlobal",
    tableName: "ROOMS_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);