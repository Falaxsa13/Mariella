import BaseModel from "./BaseModel";

class CourseModel extends BaseModel {
  universityId?: number;
  majorId?: number;

  constructor(
    id: number,
    data?: unknown,
    majorId?: number,
    universityId?: number,
  ) {
    super(id, data);
    this.majorId = majorId;
    this.universityId = universityId;
  }
}

export default CourseModel;
