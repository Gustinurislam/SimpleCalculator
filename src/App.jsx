import Button from "./components/Button"
import ButtonBox from "./components/ButtonBox"
import Screen from "./components/Screen"
import Wrapper from "./components/Wrapper"

const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
]

const App = () => {
  return (
    <div className="h-screen bg-[#f4f4f4] flex flex-col justify-center items-center">
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btnValue, i) => (
            <Button key={i} value={btnValue} />
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  )
}

export default App
