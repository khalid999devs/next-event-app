import { Inter } from '@next/font/google'
import { HomePage } from '../src/components/home/home-page'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <div>
      <HomePage data={data} />
    </div>
  )
}

//it nees top be seperated the ssr
export async function getServerSideProps() {
  //anything in this won't be accessible to the client--runs on the server only
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories,
    },
  }
}
