import { useEffect, useState } from 'react'
import Cell from './components/Cell'
function App() {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', ''])
  const [go, setGo] = useState('circle')
  const [winningMessage, setWinningMessage] = useState(null as string|null)

  useEffect(() => {
    checkWinner()
  }, [cells])

  const checkWinner = () => {
    const winnerCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ]
    const signs = ['cross', 'circle']
    signs.map((sign: string) => {
      winnerCombos.map((combo: number[]) => {        
        if (combo.every(id => cells[id] === sign)) {
          setWinningMessage('winner is ' + sign)
        }
      })
    })
  }

  const markHandler = (id: number) => {
    if (cells[id].length || winningMessage) {
      return
    }
    setCells((prev) => {
      prev[id] = go
      return [...prev]
    })
    setGo((prevGo) => (prevGo === 'circle' ? 'cross' : 'circle'))
  }

  const message = winningMessage ?? `next is ${go}`

  return (
    <div className="app">
      <div className="game-board">
        {cells.map((cell, index) => (
          <Cell key={index} cellId={index} onMark={markHandler} value={cell} />
        ))}
      </div>
      <p>{message}</p>
    </div>
  )
}

export default App
