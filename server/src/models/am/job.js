import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class JobAM extends Model {
    jobId;
    name;
    departmentName;
    salary;
}

JobAM.init(
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
    sequelize: SequelizeService.getAMInstance(),
    modelName: "JobAM",
    tableName: "JOBS_AM",
    schema: 'MODBD_REGIONAL_USER',
    createdAt: false,
    updatedAt: false
  }
);