import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class JobGlobal extends Model {
    jobId;
    name;
    departmentName;
    salary;
}

JobGlobal.init(
  {
    jobId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
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
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "JobGlobal",
    tableName: "JOBS_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);