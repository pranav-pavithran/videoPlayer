import logo from './logo.svg';
import './App.css';

function App() {

  const handlePlay = () => {
  var vidPlayer =  document.getElementById("videoPlayer");
   vidPlayer.play()
  }

  return (
    <div className="App">
      <video id='videoPlayer' >
       <source src="https://instaxinfostoragestg2.blob.core.windows.net/instaxbo23storagecontainer/data%5Ce3228b364ca59e04867e9b8d76baf63e.mp4?sv=2023-08-03&st=2023-10-20T10:57:54Z&se=2023-10-20T11:32:54Z&sr=b&sp=r&sig=ZMfJ5dBMttyjidmrN9ujZLbZ9ZTrfDcvg95x08wPzgQ%3D" type="video/mp4" />
      </video>
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}

export default App;
