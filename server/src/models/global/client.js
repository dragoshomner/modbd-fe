import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class ClientGlobal extends Model {
    clientId;
    name;
    email;
    phoneNumber;
    premiumGuest;
    membershipPoints;
}

ClientGlobal.init(
  {
    clientId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      field: "CLIENT_ID",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "NAME",
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: "EMAIL",
    },
    phoneNumber: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: "PHONE_NUMBER",
    },
    premiumGuest: {
      type: DataTypes.NUMBER,
      values: [0, 1],
      allowNull: true,
      field: "PREMIUM_GUEST",
    },
    membershipPoints: {
      type: DataTypes.NUMBER,
      allowNull: true,
      field: "MEMBERSHIP_POINTS",
    }
  },
  {
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "ClientGlobal",
    tableName: "CLIENTS_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);