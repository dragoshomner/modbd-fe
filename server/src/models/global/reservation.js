import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class ReservationGlobal extends Model {
    reservationId;
    roomId;
    clientId;
    createdAt;
    checkInDate;
    checkOutDate;
}

ReservationGlobal.init(
  {
    reservationId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
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
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "ReservationGlobal",
    tableName: "RESERVATIONS_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);