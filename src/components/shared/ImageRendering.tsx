interface props {
  images: FileList[];
  multiple: boolean;
}

const ImageRendering: React.FC<props> = ({ images, multiple }) => {
  const imgArray = Array.from(images);
  return (
    <span>
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
    </span>
  );
};

export default ImageRendering;
