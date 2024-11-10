import CreateUserButton from "./components/create-user-button"

function App() {
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
        <CreateUserButton />
      </header>
    </div>
  )
}

export default App
