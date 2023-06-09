import { DataTypes, Model } from "sequelize";
import { SequelizeService } from "../../config/db.js";

export class EmployeeGlobal extends Model {
    employeeId;
    hotelId;
    jobId;
    name;
    address;
    startDate;
    birthDate;
    nationality
}

EmployeeGlobal.init(
  {
    employeeId: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: true,
      field: "EMPLOYEE_ID",
    },
    hotelId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "HOTEL_ID",
    },
    jobId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "JOB_ID",
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "NAME",
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "ADDRESS",
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "START_DATE",
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "BIRTHDATE",
    },
    nationality: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: "NATIONALITY",
    }
  },
  {
    sequelize: SequelizeService.getGlobalInstance(),
    modelName: "EmployeeGlobal",
    tableName: "EMPLOYEES_GLOBAL",
    schema: 'MODBD_GLOBAL_USER',
    createdAt: false,
    updatedAt: false
  }
);