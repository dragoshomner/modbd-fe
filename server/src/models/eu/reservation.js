import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class ReservationEU extends Model {
    reservationId;
    roomId;
    clientId;
    createdAt;
    checkInDate;
    checkOutDate;
}

ReservationEU.init(
  {
    reservationId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      field: "RESERVATION_ID",
    },
    roomId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "ROOM_ID",
    },
    clientId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "CLIENT_ID",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "CREATED_AT",
    },
    checkInDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "CHECK_IN_DATE",
    },
    checkOutDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "CHECK_OUT_DATE",
    },
  },
  {
    sequelize: SequelizeService.getEUInstance(),
    modelName: "ReservationEU",
    tableName: "RESERVATIONS_EU",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);