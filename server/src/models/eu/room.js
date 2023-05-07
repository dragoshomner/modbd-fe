import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class RoomEU extends Model {
    roomId;
    hotelId;
    roomNumber;
    floor;
    description;
    type;
    price;
    smoking;
}

RoomEU.init(
  {
    roomId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
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
    sequelize: SequelizeService.getEUInstance(),
    modelName: "RoomEU",
    tableName: "ROOMS_EU",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);