import axios from "axios"

// axiosのインスタンスを作成
const api = axios.create({
  baseURL: "http://0.0.0.0:8000", // ベースURLを設定
  timeout: 5000, // タイムアウトを設定（ミリ秒）
  headers: {
    "Content-Type": "application/json",
    // 必要なら追加のヘッダーもここに設定
  },
})

export type TestData = {
  message: string
}

export const getData = async (): Promise<TestData | undefined> => {
  try {
    const response = await api.get<TestData>("/")
    return response.data
  } catch (e) {
    console.error("Failed to fetch data:", e)
    return undefined
  }
}
