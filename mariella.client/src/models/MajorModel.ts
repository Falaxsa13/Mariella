import BaseModel from "./BaseModel";

class MajorModel extends BaseModel {
    universityId?: number;

    constructor(id: number, data?: unknown, universityId?: number) {
        super(id, data);
        this.universityId = universityId;
    }
}

export default MajorModel;
