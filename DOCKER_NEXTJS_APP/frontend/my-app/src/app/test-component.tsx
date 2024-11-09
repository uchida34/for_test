"use client"

import React from "react"
import { useState } from "react"
import { getData, TestData } from "./api"

const TestComponent = () => {
  const [data, setData] = useState<TestData>()
  const [isLoading, setIsLoading] = useState(false)

  const handleClickButton = async () => {
    setIsLoading(true)
    const data = await getData()
    setIsLoading(false)
    setData(data)
  }

  if (isLoading) <>loading...</>

  return (
    <div
      style={{
        fontSize: "10em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleClickButton}
        style={{ backgroundColor: "gray", width: "4em" }}
      >
        TEST
      </button>
      <div>{data?.message}</div>
    </div>
  )
}

export default TestComponent
