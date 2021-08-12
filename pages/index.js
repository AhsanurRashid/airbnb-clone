import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCart from '../components/SmallCart'

export default function Home({exploreData, cardData}) {
  return (
    <div>
      <Head>
        <title>AirBnB-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header section */}
      <Header />

      {/* banner section */}
      <Banner />

      <main className="max-w-7xl mx-auto sm:px-16 px-8"> 
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
              exploreData?.map(({img, location, distance})=>(
                <SmallCart key={img} img={img} location={location} distance={distance} />
              ))
            }
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {
              cardData?.map(({img, title})=>(
                <MediumCard key={img} img={img} title={title} />
              ))
            }
          </div>
        </section>

        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated By Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <footer className="bg-gray-200">
        <Footer />
      </footer>      
      
    </div>
  )
}


export async function getStaticProps() {
  const resOne = await fetch('https://links.papareact.com/pyp')
  const exploreData = await resOne.json()

  const resTwo = await fetch('https://links.papareact.com/zp1')
  const cardData = await resTwo.json()

  return {
    props: {
      exploreData,
      cardData,
    },
  }
}
