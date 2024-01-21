const safeJsonParse = <T>(str: string | null, defaultValue: T) => {
  try {
    const jsonValue: T = JSON.parse(str as string);
    return jsonValue;
  } catch {
    return defaultValue;
  }
};

export default safeJsonParse;
