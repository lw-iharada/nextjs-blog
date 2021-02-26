import useSWR from 'swr'
import fetcher from './fetcher'

export default function Profile({id}) {
  const { data, error } = useSWR(`https://run.mocky.io/v3/a06ae7db-9f5e-4d9f-9159-49b1169b0a58?id=${id}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>Hello {data.name}!</div>
}