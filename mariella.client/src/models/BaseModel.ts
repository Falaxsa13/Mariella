class BaseModel {
    [key: string]: unknown;
    id: number;
    name?: string;
    abbreviation?: string;

    constructor(id: number, data?: unknown) {
        this.id = id;
        Object.assign(this, data);
    }
}

export default BaseModel;
