import BaseModel from "./BaseModel";

class GradingRubricModel extends BaseModel {
  courseId?: number;
  majorId?: number;
  institutionId?: number;

  constructor(
    id: number,
    data?: unknown,
    courseId?: number,
    majorId?: number,
    institutionId?: number
  ) {
    super(id, data);
    this.courseId = courseId;
    this.majorId = majorId;
    this.institutionId = institutionId;
  }
}

export default GradingRubricModel;
