import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    vehicleType: VehicleType;
    name: string;
    partRequired: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export enum VehicleType {
    twoWheeler = "twoWheeler",
    fourWheeler = "fourWheeler"
}
export interface backendInterface {
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiry(id: bigint): Promise<Inquiry>;
    submitInquiry(name: string, phone: string, vehicleType: VehicleType, partRequired: string, message: string): Promise<void>;
}
