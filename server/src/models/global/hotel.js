import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class HotelGlobal extends Model {
    hotelId;
    addressId;
    name;
    description;
    rating;
}

HotelGlobal.init(
  {
    hotelId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: true,
      field: "HOTEL_ID",
    },
    addressId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "ADDRESS_ID",
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "NAME",
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "DESCRIPTION",
    },
    rating: {
      type: DataTypes.NUMBER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5
      },
      field: "RATING",
    },
  },
  {
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "HotelGlobal",
    tableName: "HOTELS_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);