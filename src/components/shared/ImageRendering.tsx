// ------------------
// props type
// ------------------
interface props {
  images: FileList[];
  multiple: boolean;
}

// ------------------
// main component
// ------------------
const ImageRendering: React.FC<props> = ({ images, multiple }) => {
  const imgArray = Array.from(images);
  return (
    <div>
      {multiple ? (
        imgArray.map((imgFileList, index) => (
          <span key={index}>
            {Array.from(imgFileList).map((file, innerIndex) => (
              <img
                key={innerIndex}
                src={URL.createObjectURL(file)}
                width={"150px"}
                alt={`Image ${innerIndex}`}
              />
            ))}
          </span>
        ))
      ) : (
        <span>
          {Array.from(imgArray[0]).map((file, innerIndex) => (
            <img
              key={innerIndex}
              src={URL.createObjectURL(file)}
              width={"150px"}
              alt={`Image ${innerIndex}`}
            />
          ))}
        </span>
      )}
    </div>
  );
};

export default ImageRendering;
