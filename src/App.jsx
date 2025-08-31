import Home from './pages/home'

import './index.css'
import Header from './components/header'

function App() {

  return (
    <main className="px-2 lg:px-0 bg-gray-800 h-auto min-h-[100dvh] flex flex-col items-center xl:gap-5 pt-[50px]">
      <Header />
      <Home />
    </main>
  )
}

export default App
