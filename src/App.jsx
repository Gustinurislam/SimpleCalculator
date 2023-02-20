import Button from "./components/Button"
import ButtonBox from "./components/ButtonBox"
import Screen from "./components/Screen"
import Wrapper from "./components/Wrapper"
import CalcProvider from "./context/CalcContext"

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
]

const App = () => {
  return (
    <CalcProvider className="h-screen bg-[#f4f4f4]">
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btnValue, i) => (
            <Button key={i} value={btnValue} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  )
}

export default App
