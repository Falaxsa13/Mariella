import BaseModel from "./BaseModel";

class MajorModel extends BaseModel {
  institutionId?: number;

  constructor(id: number, data?: unknown, institutionId?: number) {
    super(id, data);
    this.institutionId = institutionId;
  }
}

export default MajorModel;
