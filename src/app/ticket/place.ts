export class Place {
    public id: number;
    public row: number;
    public seat: number;
    public sector: string;
    public state: boolean;

    // create constructor
    constructor({ id, row, seat, sector, state }: { id: number; row: number; seat: number; sector: string; state: boolean; }) {
        this.id = id;
        this.row = row;
        this.seat = seat;
        this.sector = sector;
        this.state = Boolean(state);
    }

    // create getters n setters
    getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }

    getRow(): number {
        return this.row;
    }
    
    setRow(row: number): void {
        this.row = row;
    }

    getSeat(): number {
        return this.seat;
    }

    setSeat(seat: number): void {
        this.seat = seat;
    }

    getSector(): string {
        return this.sector;
    }
    
    setSector(sector: string): void {
        this.sector = sector;
    }

    getState(): boolean {
        return this.state;
    }

    setState(state: boolean): void {
        this.state = state;
    }
}
