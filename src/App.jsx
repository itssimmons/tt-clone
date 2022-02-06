import React from 'react'
import './app.css'
import FeedVideos from './components/FeedVideos'
import FooterMenu from './components/FooterMenu'
import Header from './components/Header'

function App () {
  return (
    <div className='app'>
      <Header />
      <main>
        <FeedVideos />
      </main>
      <FooterMenu />
    </div>
  )
}

export default App
