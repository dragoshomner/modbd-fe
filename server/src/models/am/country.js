import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class CountryAM extends Model {
    countryId;
    continentId;
    name;
}

CountryAM.init(
  {
    countryId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
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
    sequelize: SequelizeService.getAMInstance(),
    modelName: "CountryAM",
    tableName: "COUNTRIES_AM",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);