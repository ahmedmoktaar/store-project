// ------------------
// props type
// ------------------
interface props {
  images: FileList[] | string[];
  multiple: boolean;
  width: string;
  height?: string;
}

// ------------------
// main component
// ------------------
const ImageRendering: React.FC<props> = ({ images, multiple, width,height }) => {
  const renderImage = (src: string, alt: string, key: string | number) => (
    <img key={key} src={src} width={width} alt={alt} height={height}/>
  );

  if (images.every((item) => typeof item === "string") && images.length > 0) {
    return (
      <>
        {images.map((image, index) =>
          renderImage(
            image as string,
            `Image ${index}`,
            images.length > 1 ? index : "Product Main Picture"
          )
        )}
      </>
    );
  } else if (
    images.every((item) => item instanceof FileList) &&
    images.length > 0
  ) {
    const imgArray = Array.from(images as FileList[]);

    const renderFileListImages = (fileList: FileList) => (
      <>
        {Array.from(fileList).map((file, innerIndex) =>
          renderImage(
            URL.createObjectURL(file),
            `Image ${innerIndex}`,
            images.length > 1 ? innerIndex : "Product Main Picture"
          )
        )}
      </>
    );

    return (
      <span>
        {multiple
          ? imgArray.map((fileList) => renderFileListImages(fileList))
          : renderFileListImages(imgArray[0])}
      </span>
    );
  }
};

export default ImageRendering;
