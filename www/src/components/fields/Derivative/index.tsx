import React from "react";
import { IFieldConfig, FieldType } from "components/fields/types";
import withCustomCell from "components/Table/withCustomCell";

import DerivativeIcon from "assets/icons/Derivative";
import BasicCell from "../_BasicCell/BasicCellNull";
import NullEditor from "components/Table/editors/NullEditor";

export const config: IFieldConfig = {
  type: FieldType.derivative,
  name: "Derivative",
  dataType: "string",
  initialValue:
    "Value derived from the rest of the row’s values. Displayed using any other field type. Requires Cloud Function setup.",
  icon: <DerivativeIcon />,
  description: "Numeric data.",
  TableCell: withCustomCell(BasicCell as any, BasicCell),
  TableEditor: NullEditor,
  SideDrawerField: BasicCell as any,
};
export default config;
