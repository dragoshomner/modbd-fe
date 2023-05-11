import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class JobEU extends Model {
    jobId;
    name;
    departmentName;
    salary;
}

JobEU.init(
  {
    jobId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
      field: "JOB_ID",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "NAME",
    },
    departmentName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: "DEPARTMENT_NAME",
    },
    salary: {
      type: DataTypes.NUMBER,
      allowNull: true,
      validate: {
        min: 1
      },
      field: "SALARY",
    },
  },
  {
    sequelize: SequelizeService.getEUInstance(),
    modelName: "JobEU",
    tableName: "JOBS_EU",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);