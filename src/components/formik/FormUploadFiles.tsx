import { ChangeEvent, useState } from "react";
import { styled as MUIstyled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FormHelperText, InputLabel, Button } from "@mui/material";
import styled from "@emotion/styled";
import { useField } from "formik";
import styles from "../../styles";

// ------------------
// props type
// ------------------
interface props {
  name: string;
  label: string;
  multiple: boolean;
}

// -------------------
// style variables
// -------------------
const { fonts } = styles;

// -------------------
// hidden input
// -------------------
const VisuallyHiddenInput = MUIstyled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

// ------------------
// main component
// ------------------
const FormUploadFiles: React.FC<props> = ({ name, label, multiple, ...props }) => {
  const [, meta, form] = useField(name);

  // --------------------
  // images handling
  // --------------------
  const [imgFileLists, setImgFileLists] = useState<FileList[] | null>(null);
  const handelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const selectedFileList = target.files;
      setImgFileLists((prev) => {
        const newList = prev && multiple ? [...prev, selectedFileList] : [selectedFileList];
        form.setValue(newList);
        return newList;
      });
    }
  };

  return (
    <Holder>
      <InputLabel htmlFor={name}>{label}</InputLabel>

      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload file
        <VisuallyHiddenInput
          type="file"
          accept="image/*"
          multiple={multiple}
          id={name}
          {...props}
          onChange={handelChange}
        />
      </Button>
      <FormHelperText error={!!meta.error && meta.touched} className="error-message">
        {meta.error && meta.touched ? meta.error : null}
      </FormHelperText>
      <div className="imgList-wrapper">
        {imgFileLists && multiple ? (
          imgFileLists.map((imgFileList, index) => (
            <span key={index}>
              {Array.from(imgFileList).map((file, innerIndex) => (
                <img
                  key={innerIndex}
                  src={URL.createObjectURL(file)}
                  alt={`Image ${innerIndex}`}
                  className="single-img"
                />
              ))}
            </span>
          ))
        ) : imgFileLists ? (
          <span>
            {Array.from(imgFileLists[0]).map((file, innerIndex) => (
              <img
                key={innerIndex}
                src={URL.createObjectURL(file)}
                alt={`Image ${innerIndex}`}
                className="single-img"
              />
            ))}
          </span>
        ) : null}
      </div>
    </Holder>
  );
};

export default FormUploadFiles;

// -------------------
// STYLED COMPONENT
// -------------------
const Holder = styled.div`
  display: grid;
  grid-template-columns: 11em 30em;
  align-items: center;

  label:first-of-type {
    font-size: 1.2em;
    ${fonts.bold}
    ::after {
      content: " :";
    }
  }
  .error-message {
    grid-column: 2 /3;
  }
  .imgList-wrapper {
    grid-column: 2 /3;
    img {
      padding: 0.1em;
      width: 100px;
    }
  }
`;
