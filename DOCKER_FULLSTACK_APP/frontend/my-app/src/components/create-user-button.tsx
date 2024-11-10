import React, { useState } from "react"
import { createUser, UserData } from "../api"

const CreateUserButton = () => {
  const [data, setData] = useState<UserData>()
  const [isLoading, setIsLoading] = useState(false)

  const handleClickButton = async () => {
    setIsLoading(true)
    const data = await createUser({
      name: "hiroki",
      email: "test@gmail.com",
      password: "aaaa",
    })
    setIsLoading(false)
    setData(data)
  }

  return (
    <>
      <button
        onClick={handleClickButton}
        style={{ padding: "2em", fontSize: "5em" }}
      >
        USER CREATE
      </button>
      {isLoading ? <>loading...</> : <>{data?.name}</>}
    </>
  )
}
export default CreateUserButton
