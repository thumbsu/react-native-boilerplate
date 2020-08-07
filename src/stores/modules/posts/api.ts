import { IPost } from './types'

export async function getPosts(): Promise<IPost[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
  return response.json()
}
