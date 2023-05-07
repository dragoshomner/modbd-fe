import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class AddressEU extends Model {
    addressId;
    cityId;
    street;
    addressNumber;
    postalCode;
    notes;
}

AddressEU.init(
  {
    addressId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
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
    sequelize: SequelizeService.getEUInstance(),
    modelName: "AddressEU",
    tableName: "ADDRESSES_EU",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);