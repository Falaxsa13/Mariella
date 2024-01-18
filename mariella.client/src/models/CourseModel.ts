import BaseModel from "./BaseModel";

class CourseModel extends BaseModel {
  institutionId?: number;
  majorId?: number;

  constructor(
    id: number,
    data?: unknown,
    majorId?: number,
    institutionId?: number,
  ) {
    super(id, data);
    this.majorId = majorId;
    this.institutionId = institutionId;
  }
}

export default CourseModel;
