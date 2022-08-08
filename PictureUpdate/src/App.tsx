import { useState } from "react";
import "./App.css";
import { InputFile } from "./components/InputFile";
import { ListOfFiles } from "./components/ListOfFiles";
import { AreaToDisplayImg } from "./components/AreaToDisplayImg";
import { Uploader} from "./components/styles/Uploader.styled"
import { AreaOfContent} from "./components/styles/AreaOfContent.styled"
function App() {
  const [imageToDisplay, setImageToDisplay] = useState();
  const [data,setData]= useState([])
 
  return (
    <>
     <AreaOfContent>
    <Uploader>
      <InputFile
      data={data}
      setData={setData}
      />
      <ListOfFiles
        data={data}
        setImageToDisplay={setImageToDisplay}
      />
      </Uploader>
    
      <AreaToDisplayImg imageToDisplay={imageToDisplay} data={data} />
      </AreaOfContent>
    </>
  );
}

export default App;
