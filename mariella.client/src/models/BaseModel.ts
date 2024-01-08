class BaseModel {
    name?: string;
    abbreviation?: string;

    constructor(data?: any) {
        Object.assign(this, data);
    }
}

export default BaseModel;
