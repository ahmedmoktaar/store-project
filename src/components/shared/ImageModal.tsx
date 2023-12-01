import { useState } from "react";
import { Dialog } from "@mui/material";
import MuiButton from "./MuiButton";

// ------------------
// props type
// ------------------
interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  children: React.ReactElement;
  multiple: boolean;
}

// ------------------
// main component
// ------------------
const ImageModal: React.FC<Props> = ({ children, multiple }) => {
  // --------------------------
  // handel img Modal open & close
  // --------------------------
  const [openImg, setOpenImg] = useState(false);
  const handleClickOpenImg = () => {
    setOpenImg(true);
  };
  const handleCloseOpenImg = () => {
    setOpenImg(false);
  };

  return (
    <>
      <a
        onClick={handleClickOpenImg}
        className={multiple ? "multiple" : "single"}
      >
        {children}
      </a>

      <Dialog
        open={openImg}
        sx={{
          "& .MuiDialog-paper .multiple": {
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "50em",
          },
          "& .MuiDialog-paper img": { width: "25em" },
          "& .MuiDialog-paper .single img": {
            display: "flex",
            flexWrap: "wrap",
            minWidth: "50em",
            maxWidth: "60em",
          },
        }}
        onClose={handleCloseOpenImg}
        maxWidth="lg"
      >
        <MuiButton
          onClick={handleCloseOpenImg}
          color="warning"
          sx={{ position: "fixed" }}
        >
          Close
        </MuiButton>

        <div className={multiple ? "multiple" : "single"}>{children}</div>
      </Dialog>
    </>
  );
};

export default ImageModal;
