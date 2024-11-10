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

export type UserData = {
  name: string
  email: string
  password: string
}

export const createUser = async (
  userData: UserData
): Promise<UserData | undefined> => {
  try {
    const response = await api.post<UserData>("/users/create", userData)
    return response.data
  } catch (e) {
    console.error("Failed to create user:", e)
    return undefined
  }
}
