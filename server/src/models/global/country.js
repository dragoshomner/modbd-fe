import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class CountryGlobal extends Model {
    countryId;
    continentId;
    name;
}

CountryGlobal.init(
  {
    countryId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: true,
      field: "COUNTRY_ID",
    },
    continentId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "CONTINENT_ID",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: "NAME",
    }
  },
  {
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "CountryGlobal",
    tableName: "COUNTRIES_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);