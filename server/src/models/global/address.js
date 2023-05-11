import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class AddressGlobal extends Model {
    addressId;
    cityId;
    street;
    addressNumber;
    postalCode;
    notes;
}

AddressGlobal.init(
  {
    addressId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: true,
      field: "ADDRESS_ID",
    },
    cityId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "CITY_ID",
    },
    street: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "STREET",
    },
    addressNumber: {
      type: DataTypes.NUMBER,
      allowNull: true,
      field: "ADDRESS_NUMBER",
    },
    postalCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "POSTAL_CODE",
    },
    notes: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "NOTES",
    }
  },
  {
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "AddressGlobal",
    tableName: "ADDRESSES_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);