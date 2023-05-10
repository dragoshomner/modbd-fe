import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class CityGlobal extends Model {
    cityId;
    countryId;
    name;
}

CityGlobal.init(
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
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "CityGlobal",
    tableName: "CITIES_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);