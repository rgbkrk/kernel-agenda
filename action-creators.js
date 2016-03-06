
// A couple simple action creators we'll use in the real Agenda we're exploring
export function updateCellOutputs(id, outputs) {
  return {
    type: 'UPDATE_CELL_OUTPUTS',
    id,
    outputs,
  };
}

export function updateCellExecutionCount(id, count) {
  return {
    type: 'UPDATE_CELL_EXECUTION_COUNT',
    id,
    count,
  };
}
