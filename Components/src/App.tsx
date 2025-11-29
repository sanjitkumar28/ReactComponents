
import './App.css'
import AutoComplete from './AutoComplete/AutoComplete'
import CustomModal from './CustomModal/CustomModal'
import CustomModalTest from './CustomModal/CustomModalTest'
import FileExproler from './FileExproler/FileExproler'
import GithubProfileFinder from './GithubProfileFinder/GithubProfileFinder'
import LightAndDarkMode from './LightAndDarkMode/LightAndDarkMode'
import Tabs from './Tabs/Tabs'
import TicTacToe from './TicTacToe/TicTacToe'
import ProgressBar from './ProgressBar/ProgressBar'
import FileExplore from './FileExplore/FileExplore'
import Accordion from './Accordion/Accordion'
import Todo from './Todo/Todo'
import ChipsInput from './ChipsInput/ChipsInput'
import OTP from './OTP/OTP'

function App() {
 

  return (
    <div>
      {/* <FileExproler/> */}
      {/* <LightAndDarkMode/> */}
      {/* <Tabs/> */}
      {/* <CustomModalTest/> */}
      {/* <GithubProfileFinder/> */}
      {/* <AutoComplete/> */}
      {/* <TicTacToe/> */}
      {/* <ProgressBar/> */}
      {/* <FileExplore/> */}
      {/* <Accordion/> */}
      {/* <Todo/> */}
      {/* <ChipsInput/> */}
      <OTP noOfDigit={5}/>
    </div>
  )
}

export default App
