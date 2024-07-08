import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class VehicleRoute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleId: string;

  @Column()
  route: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;
}
