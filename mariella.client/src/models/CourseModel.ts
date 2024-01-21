import BaseModel from "./BaseModel";

class CourseModel extends BaseModel {
  majorId?: number;

  constructor(id: number, data?: unknown, majorId?: number) {
    super(id, data);
    this.majorId = majorId;
  }
}

export default CourseModel;
