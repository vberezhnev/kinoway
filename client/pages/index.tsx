import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import axios from 'axios'

// Import components
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <Sidebar />
        </div>
        <div>
          asdasd
        </div>
      </div>

      <p className="text">
        asdasd
      </p>
    </div>
  )
}

export default Home
