import PropTypes from "prop-types";

// Redux
export const initializeOptionsPropType = PropTypes.func.isRequired;
export const initializeCustomComponentsPropType = PropTypes.func.isRequired;
export const updateComponentSizePropType = PropTypes.func.isRequired;
export const sortColumnsPropType = PropTypes.func.isRequired;
export const setPagePagePropType = PropTypes.func.isRequired;
export const setRowsPerPagePropType = PropTypes.func.isRequired;
export const setRowEditedPropType = PropTypes.func.isRequired;
export const addRowEditedPropType = PropTypes.func.isRequired;
export const setIsScrollingPropType = PropTypes.func.isRequired;
export const isScrollingPropType = PropTypes.bool;
export const canDeletePropType = PropTypes.bool;
export const rowsEditedPropType = PropTypes.arrayOf(PropTypes.object);

export const cellValPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool
]);

export const classesPropType = PropTypes.object;

// Input propTypes
export const typePropType = PropTypes.string;
export const rowIdPropType = PropTypes.string;
export const columnIdPropType = PropTypes.string;
export const editingPropType = PropTypes.bool;

// Pagination propTypes
export const pageSelectedPropType = PropTypes.number;
export const pageTotalPropType = PropTypes.number;
export const rowsPerPageSelectedPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);
export const rowsCurrentPagePropType = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
);
export const paginationPropType = PropTypes.shape({
  pageSelected: pageSelectedPropType,
  pageTotal: pageTotalPropType,
  rowsPerPageSelected: rowsPerPageSelectedPropType,
  rowsCurrentPage: rowsCurrentPagePropType
});

// Options propTypes
export const forceRerenderPropType = PropTypes.bool;
export const titlePropType = PropTypes.string;
export const widthPropType = PropTypes.string;
export const widthNumberPropType = PropTypes.number;
export const heightPropType = PropTypes.string;
export const heightNumberPropType = PropTypes.number;
export const columnSizeMultiplierPropType = PropTypes.number;
export const stylePropType = PropTypes.object;
export const keyColumnPropType = PropTypes.string;
export const fontPropType = PropTypes.string;
export const idPropType = PropTypes.string;
export const labelPropType = PropTypes.string;
export const colSizePropType = PropTypes.string;
export const editablePropType = PropTypes.bool;
export const dataTypePropType = PropTypes.string;
export const inputTypePropType = PropTypes.string;
export const dateFormatPropType = PropTypes.string;
export const valuesPropType = PropTypes.array;
export const requiredPropType = PropTypes.bool;
export const valueVerificationPropType = PropTypes.func;
export const rowPropType = PropTypes.object;
export const rowsPropType = PropTypes.arrayOf(rowPropType);
export const canEditPropType = PropTypes.bool;
export const canPrintPropType = PropTypes.bool;
export const canDownloadPropType = PropTypes.bool;
export const canSearchPropType = PropTypes.bool;
export const canRefreshRowsPropType = PropTypes.bool;
export const canFilterColumnsPropType = PropTypes.bool;
export const canSaveUserConfigurationPropType = PropTypes.bool;
export const columnsOrderPropType = PropTypes.arrayOf(PropTypes.string);
export const copyToClipboardPropType = PropTypes.bool;
export const availablePropType = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.string, PropTypes.number])
);
export const selectedPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]);
export const rowsSelectablePropType = PropTypes.bool;
export const selectPageRowsPropType = PropTypes.bool;
export const selectAllRowsPropType = PropTypes.bool;
export const tooltipPropType = PropTypes.string;
export const iconPropType = PropTypes.element;
export const positionPropType = PropTypes.number;
export const onClickPropType = PropTypes.func;
export const headOfTheTablePropType = PropTypes.element;
export const bodyOfTheTablePropType = PropTypes.element;

export const datatablePropType = PropTypes.shape({
  width: widthPropType.isRequired,
  widthNumber: widthNumberPropType
});

export const headerPropType = PropTypes.shape({
  height: heightPropType.isRequired,
  heightNumber: heightNumberPropType
});

export const bodyPropType = PropTypes.shape({
  height: heightPropType.isRequired,
  heightNumber: heightNumberPropType
});

export const rowDimensionPropType = PropTypes.shape({
  height: heightPropType.isRequired,
  heightNumber: heightNumberPropType
});

export const dimensionsPropType = PropTypes.shape({
  datatable: datatablePropType,
  header: headerPropType,
  body: bodyPropType,
  row: rowDimensionPropType,
  columnSizeMultiplier: columnSizeMultiplierPropType
});

export const columnPropType = PropTypes.shape({
  id: idPropType.isRequired,
  label: labelPropType.isRequired,
  colSize: colSizePropType,
  editable: editablePropType,
  dataType: dataTypePropType,
  inputType: inputTypePropType,
  dateFormat: dateFormatPropType,
  values: valuesPropType,
  required: requiredPropType,
  valueVerification: valueVerificationPropType
});

export const columnsPropType = PropTypes.arrayOf(columnPropType);

export const dataPropType = PropTypes.shape({
  columns: columnsPropType,
  rows: rowsPropType
});

export const userConfigurationPropType = PropTypes.shape({
  columnsOrder: columnsOrderPropType,
  copyToClipboard: copyToClipboardPropType
});

export const rowsPerPagePropType = PropTypes.shape({
  available: availablePropType,
  selected: selectedPropType
});

export const selectionPropType = PropTypes.shape({
  rowsSelectable: rowsSelectablePropType,
  selectPageRows: selectPageRowsPropType,
  selectAllRows: selectAllRowsPropType
});

export const additionalIconsPropType = PropTypes.shape({
  tooltip: tooltipPropType,
  icon: iconPropType.isRequired,
  position: positionPropType,
  onClick: onClickPropType.isRequired
});

export const selectionIconsPropType = PropTypes.shape({
  tooltip: tooltipPropType,
  icon: iconPropType.isRequired,
  position: positionPropType,
  onClick: onClickPropType.isRequired
});

export const featuresPropType = PropTypes.shape({
  canEdit: canEditPropType,
  canPrint: canPrintPropType,
  canDownload: canDownloadPropType,
  canSearch: canSearchPropType,
  canRefreshRows: canRefreshRowsPropType,
  canFilterColumns: canFilterColumnsPropType,
  canSaveUserConfiguration: canSaveUserConfigurationPropType,
  userConfiguration: userConfigurationPropType,
  rowsPerPage: rowsPerPagePropType,
  selection: selectionPropType,
  additionalIcons: PropTypes.arrayOf(additionalIconsPropType),
  selectionIcons: PropTypes.arrayOf(selectionIconsPropType)
});

export const optionsPropType = PropTypes.shape({
  title: titlePropType,
  dimensions: dimensionsPropType,
  keyColumn: keyColumnPropType.isRequired,
  font: fontPropType,
  data: dataPropType.isRequired,
  features: featuresPropType
});

export const CustomTableBodyRowPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const CustomTableBodyCellPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const CustomTableHeaderRowPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const CustomTableHeaderCellPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);
export const componentPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
]);

export const customDataTypePropType = PropTypes.shape({
  dataType: dataTypePropType.isRequired,
  component: componentPropType.isRequired
});

export const customDataTypesPropType = PropTypes.arrayOf(
  customDataTypePropType
);

export const indexPropType = PropTypes.number;
