import BaseModel from "./BaseModel";

class GradingRubricModel extends BaseModel {
    courseId?: number;
    majorId?: number;
    universityId?: number;

    constructor(
        id: number,
        data?: unknown,
        courseId?: number,
        majorId?: number,
        universityId?: number
    ) {
        super(id, data);
        this.courseId = courseId;
        this.majorId = majorId;
        this.universityId = universityId;
    }
}

export default GradingRubricModel;
