export interface CommonResponse<T = object> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

export interface MyResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldErrors: string[]
  resultCode: number
}

export type logType = 'error' | 'success' | 'info' | 'warning'
