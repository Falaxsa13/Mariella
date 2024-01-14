class BaseModel {
    id: number;
    name?: string;
    abbreviation?: string;

    constructor(id: number, data?: unknown) {
        this.id = id;
        Object.assign(this, data);
    }
}

export type BaseModelKeys = keyof typeof BaseModel.prototype;

export default BaseModel;
