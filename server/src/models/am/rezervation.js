import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class RezervationAM extends Model {
    rezervationId;
    roomId;
    clientId;
    createdAt;
    checkInDate;
    checkOutDate;
}

RezervationAM.init(
  {
    rezervationId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      field: "REZERVATION_ID",
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
    sequelize: SequelizeService.getAMInstance(),
    modelName: "RezervationAM",
    tableName: "REZERVATIONS_AM",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);