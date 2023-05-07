import { Sequelize } from "sequelize";
import * as oracledb from 'oracledb';

export class SequelizeService {
    static #EUInstance;
    static #AMInstance;
    static #GlobalInstance;

    static getEUInstance() {
        if (!SequelizeService.#EUInstance) {
            SequelizeService.#EUInstance = new Sequelize( {
                dialect: 'oracle',
                username: 'modbd_regional_user',
                password: 'modbdpw',
                host: 'localhost',
                port: '1521',
                database: 'modbd_global'
            });
        }
        return SequelizeService.#EUInstance;
    }

    static getAMInstance() {
        if (!SequelizeService.#AMInstance) {
            SequelizeService.#AMInstance = new Sequelize( {
                dialect: 'oracle',
                username: 'modbd_regional_user',
                password: 'modbdpw',
                host: 'localhost',
                port: '1521',
                database: 'modbd_regional'
            });
        }
        return SequelizeService.#AMInstance;
    }

    static getGlobalInstance() {
        if (!SequelizeService.#GlobalInstance) {
            SequelizeService.#GlobalInstance = new Sequelize( {
                dialect: 'oracle',
                username: 'modbd_global_user',
                password: 'modbdpw',
                host: 'localhost',
                port: '1521',
                database: 'modbd_global'
            });
        }
        return SequelizeService.#GlobalInstance;
    }
}