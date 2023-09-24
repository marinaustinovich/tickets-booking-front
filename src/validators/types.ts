export type FieldValue = Date | boolean | string | undefined | null;
export type FieldValidator = (value: FieldValue) => string | undefined | null;
