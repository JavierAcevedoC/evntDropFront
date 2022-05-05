import { Place } from "./place";

export class Ticket {
    public id: number;
    public code: number;
    public eventName: string;
    public eventDate: string;
    public description: string;
    public place: Place;

    constructor({ id, code, eventName, eventDate, description, place }: { id: number; code: number; eventName: string; eventDate: string; description: string; place: Place; }) {
        this.id = id;
        this.code = code;
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.description = description;
        this.place = place;
    }
}