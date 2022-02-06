import React from 'react'
import './App.css'
import FeedVideos from './components/FeedVideos'
import FooterMenu from './components/FooterMenu'
import Header from './components/Header'

function App () {
  return (
    <div className='App'>
      <Header />
      <main>
        <FeedVideos />
      </main>
      <FooterMenu />
    </div>
  )
}

export default App
