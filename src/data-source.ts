import { DataSource } from "typeorm";
import { VehicleRoute } from "./entity/VehicleRoute";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username",
  password: "your_password",
  database: "your_database",
  synchronize: true,
  logging: false,
  entities: [VehicleRoute],
  migrations: [],
  subscribers: [],
});
