export function assertFileLength(arr: Array) {
  if (arr.length > 5) {
    arr.length = 5;
  }
}


 type dataObcjectType={
  name: string,
  url:string
}

export let getDataObj = (data: File) => {
  let obj: dataObcjectType = { name: data.name, url: URL.createObjectURL(data) }
  return obj ;
};
