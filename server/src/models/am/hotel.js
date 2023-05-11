import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class HotelAM extends Model {
    hotelId;
    addressId;
    name;
    description;
    rating;
}

HotelAM.init(
  {
    hotelId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
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
    sequelize: SequelizeService.getAMInstance(),
    modelName: "HotelAM",
    tableName: "HOTELS_AM",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);