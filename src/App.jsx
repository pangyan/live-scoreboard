import classes from './app.module.scss'
import Footer from "./components/Footer/index.jsx"
import Header from "./components/Header/index.jsx"
import ScoreboardsGrid from "./components/ScoreboardsGrid/index.jsx"

function App() {
  return (
    <div className={classes.app}>
        <Header/>
        <main>
            <ScoreboardsGrid/>
        </main>
        <Footer/>
    </div>
  )
}

export default App
