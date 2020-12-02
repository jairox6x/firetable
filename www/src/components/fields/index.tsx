import _find from "lodash/find";
import _get from "lodash/get";

import { FieldType } from "constants/fields";
import { IFieldConfig } from "./types";

// Import field configs
import ShortText from "./ShortText";
import LongText from "./LongText";
import Email from "./Email";
import Phone from "./Phone";
import Url from "./Url";
import Checkbox from "./Checkbox";
import Number_ from "./Number";
import Percentage from "./Percentage";
import Date_ from "./Date";
import DateTime from "./DateTime";
import Duration from "./Duration";
import SubTable from "./SubTable";
import Action from "./Action";
import Derivative from "./Derivative";
import Aggregate from "./Aggregate";
import User from "./User";
import Id from "./Id";

// Export field configs in order for FieldsDropdown
export const FIELDS: IFieldConfig[] = [
  // TEXT
  ShortText,
  LongText,
  Email,
  Phone,
  Url,
  // NUMERIC
  Checkbox,
  Number_,
  Percentage,
  // TODO: rating,
  // TODO: slider,
  // TODO: color,
  // DATE & TIME
  Date_,
  DateTime,
  Duration,
  // FILE
  // TODO: image,
  // TODO: file,
  // SELECT
  // TODO: singleSelect,
  // TODO: multiSelect,
  // CONNECTION
  SubTable,
  // TODO: connectTable,
  // TODO: connectService,
  // CODE
  // TODO: json,
  // TODO: code,
  // TODO: richText,
  // CLOUD FUNCTION
  Action,
  Derivative,
  Aggregate,
  // FIRETABLE
  User,
  Id,
];

/**
 * Returns specific property of field config
 * @param fieldType
 */
export const getFieldProp = (
  prop: keyof IFieldConfig,
  fieldType: FieldType
) => {
  const field = _find(FIELDS, { type: fieldType });
  return _get(field, prop);
};

/**
 * Returns `true` if it receives an existing fieldType
 * @param fieldType
 */
export const isFieldType = (fieldType: any) => {
  const fieldTypes = FIELDS.map((field) => field.type);
  return fieldTypes.includes(fieldType);
};
