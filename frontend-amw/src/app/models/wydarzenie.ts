export interface Wydarzenie {
    id?: number;      // Dla MySQL
    _id?: string;     // Dla MongoDB
    tytul: string;
    data: string;
    opis: string;
}