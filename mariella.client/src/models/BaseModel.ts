class BaseModel {
  id: number;
  name?: string;
  abbreviation?: string;
  icon?: string;

  constructor(id: number, data?: unknown) {
    this.id = id;
    Object.assign(this, data);
  }

  setProperty<T extends keyof this>(key: T, value: this[T]) {
    this[key] = value;
  }
}

export default BaseModel;
