import { useEffect } from "react";

interface Props {
  setFile: Function;
  file: any;
  images: any;
  setImages: Function;
  setNameOfFiles: Function;
}
export const InputFile = ({
  setFile,
  file,
  setImages,
  images,
  setNameOfFiles,
}: Props) => {
  function removeFiles(arr: Array) {
    let numberOfRemove: number = arr.length - 5;
    if (arr.length > 5) {
      for (let i = 0; i < numberOfRemove; i++) {
        arr.pop();
      }
    }
  }

  useEffect(() => {
    if (file.length > 5) {
      return alert("You are only allowed to upload a maximum of 5 files");
    }
  }, [file]);

  const inputFileHandler = (e: any) => {
    file.unshift(...e.target.files);
    removeFiles(file)

    setFile(file);
    console.log("file");
    console.log(file);

    images.unshift(file.map((element) => URL.createObjectURL(element)));
  
    removeFiles(images)
    setImages(images);
    console.log("img");
    console.log(images);

    setNameOfFiles({
      file1: file[0] === undefined ? "file1" : file[0].name,
      file2: file[1] === undefined ? "file2" : file[1].name,
      file3: file[2] === undefined ? "file3" : file[2].name,
      file4: file[3] === undefined ? "file4" : file[3].name,
      file5: file[4] === undefined ? "file5" : file[4].name,
    });
  };
  return (
    <>
      <input
        type="file"
        onChange={inputFileHandler}
        multiple
        accept="image/png, image/gif, image/jpeg"
      />
    </>
  );
};
