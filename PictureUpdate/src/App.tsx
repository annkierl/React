import { useState, useEffect } from "react";
import "./App.css";
import { InputFile } from "./components/InputFile";
import { ListOfFiles } from "./components/ListOfFiles";
import { AreaToDisplayImg } from "./components/AreaToDisplayImg";
function App() {
  const [file, setFile] = useState([]);
  const [images, setImages] = useState([]);
  const [imageToDisplay, setImageToDisplay] = useState("");
  const [nameOfFiles, setNameOfFiles] = useState({
    file1: "file1",
    file2: "file2",
    file3: "file3",
    file4: "file4",
    file5: "file5",
  });

  //   console.log("zMaina")
  //  console.log(image)
  return (
    <>
      <InputFile
        setFile={setFile}
        file={file}
        setImages={setImages}
        setNameOfFiles={setNameOfFiles}
        images={images}
      />
      <ListOfFiles
      nameOfFiles={nameOfFiles}
      imageToDisplay={imageToDisplay}
      setNameOfFiles={setNameOfFiles}
        images={images}
        setImageToDisplay={setImageToDisplay}
        file={file}
      />
      <AreaToDisplayImg imageToDisplay={imageToDisplay} />
    </>
  );
}

export default App;
