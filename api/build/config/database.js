"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const Application_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Application"));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION', 'sqlite'),
    connections: {
        sqlite: {
            client: 'sqlite',
            connection: {
                filename: Application_1.default.tmpPath('db.sqlite3'),
            },
            useNullAsDefault: true,
            healthCheck: false,
        },
        mysql: {
            client: 'mysql',
            connection: {
                host: Env_1.default.get('DB_HOST', '127.0.0.1'),
                port: Number(Env_1.default.get('DB_PORT', 3306)),
                user: Env_1.default.get('DB_USER', 'lucid'),
                password: Env_1.default.get('DB_PASSWORD', 'lucid'),
                database: Env_1.default.get('DB_NAME', 'lucid'),
            },
            healthCheck: false,
        },
        pg: {
            client: 'pg',
            connection: {
                host: Env_1.default.get('DB_HOST', '127.0.0.1'),
                port: Number(Env_1.default.get('DB_PORT', 5432)),
                user: Env_1.default.get('DB_USER', 'lucid'),
                password: Env_1.default.get('DB_PASSWORD', 'lucid'),
                database: Env_1.default.get('DB_NAME', 'lucid'),
            },
            healthCheck: false,
        },
    },
    orm: {},
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map