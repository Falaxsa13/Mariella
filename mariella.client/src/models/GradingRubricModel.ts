import BaseModel from "./BaseModel";

class GradingRubricModel extends BaseModel {
  courseId?: number;

  constructor(id: number, data?: unknown, courseId?: number) {
    super(id, data);
    this.courseId = courseId;
  }
}

export default GradingRubricModel;
