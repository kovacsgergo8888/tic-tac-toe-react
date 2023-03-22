interface CellProps {
  cellId: number,
  onMark: Function,
  value: string
}
const Cell = ({ cellId, onMark, value }: CellProps) => {
  const clickHandler = () => {
    onMark(cellId)
  }
  const sign = value === ''
    ? ''
    : value === 'circle'
      ? 'o'
      : 'x'
  return <div className="square" onClick={clickHandler}>{sign}</div>
}

export default Cell
