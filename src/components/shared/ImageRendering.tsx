// ------------------
// props type
// ------------------
interface props {
  images: FileList[] | string[];
  multiple: boolean;
  width: string;
  height?: string;
}

// ------------------------
// Make Image Path Absolute
// ------------------------
const makeImagePathAbsolute = (relativePath: string) => {
  return `${import.meta.env.BASE_URL}${relativePath}`;
};

// ----------------
// Render Image
// ----------------
const renderImage = (
  src: string,
  alt: string,
  key: string | number,
  width: string,
  height?: string
) => (
  <img
    key={key}
    src={src}
    width={width}
    alt={alt}
    height={height}
    style={{
      border: "2px solid #ffffff",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    }}
  />
);

// ------------------
// main component
// ------------------
const ImageRendering: React.FC<props> = ({ images, multiple, width, height }) => {
  // --------------------------------------------
  // Render default product Images
  // --------------------------------------------
  if (images.every((item) => typeof item === "string") && images.length > 0) {
    return (
      <>
        {images.map((image, index) =>
          renderImage(
            makeImagePathAbsolute(image as string),
            `Image ${index}`,
            images.length > 1 ? index : "Product Main Picture",
            width,
            height
          )
        )}
      </>
    );

    // --------------------------------------------
    // Render seller product Images
    // --------------------------------------------
  } else if (images.every((item) => item instanceof FileList) && images.length > 0) {
    const imgArray = Array.from(images as FileList[]);

    const renderFileListImages = (fileList: FileList) => (
      <>
        {Array.from(fileList).map((file, innerIndex) =>
          renderImage(
            URL.createObjectURL(file),
            `Image ${innerIndex}`,
            images.length > 1 ? innerIndex : "Product Main Picture",
            width,
            height
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
