import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class CityEU extends Model {
    cityId;
    countryId;
    name;
}

CityEU.init(
  {
    cityId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      field: "CITY_ID",
    },
    countryId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "COUNTRY_ID",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "NAME",
    }
  },
  {
    sequelize: SequelizeService.getEUInstance(),
    modelName: "CityEU",
    tableName: "CITIES_EU",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);