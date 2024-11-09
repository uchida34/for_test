import { useState } from "react"
import { getData, TestData } from "./api"

function App() {
  const [data, setData] = useState<TestData>()
  const [isLoading, setIsLoading] = useState(false)

  const handleClickButton = async () => {
    setIsLoading(true)
    const data = await getData()
    setIsLoading(false)
    setData(data)
  }

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <button onClick={handleClickButton} style={{ padding: "2em" }}>
          APIコール
        </button>
        {isLoading ? <>loading...</> : <>{data?.message}</>}
      </header>
    </div>
  )
}

export default App
