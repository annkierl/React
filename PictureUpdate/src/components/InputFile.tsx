import { assertFileLength, getDataObj } from "./Helpers";
import {Selector} from "./styles/Selector.styled";

interface Props {
  data: Array;
  setData: Function;
}


export const InputFile = ({ data, setData }: Props) => {
  const inputFileChangeHandler = (e: any) => {
    if (e.target.files.length > 5) {
      return alert("You are only allowed to upload a maximum of 5 files");
    }

    let targetfiles = [...e.target.files];
    let dataObjectsArray = targetfiles.map((element) => getDataObj(element));
    let newdata = [...dataObjectsArray, ...data];
    assertFileLength(newdata);
    setData(newdata);
  };
  return (
    <>
  
      <label
        htmlFor="filePicker"
        style={{ padding: "0.8em 5em", backgroundColor: "white" }}
      >
        Select files:
      </label>
      <input
        style={{ visibility: "hidden" }}
        id="filePicker"
        type="file"
        onChange={inputFileChangeHandler}
        multiple
        accept="image/png, image/gif, image/jpeg"
      />
    </>
  );
};
