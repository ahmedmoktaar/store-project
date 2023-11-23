import styled from "@emotion/styled";
import { useSelector } from "../../../../redux/Store/hooks";
import { maleCategoriesList } from "../../../../assets/data/GlobalVariables";
import { Typography } from "@mui/material";
import ImageRendering from "../../../../components/shared/ImageRendering";
import styles from "../../../../styles";

const { fonts } = styles;
const MenCategoriesPage = () => {
  const menStore = useSelector((state) => state.men);

  return (
    <Holder>
      <>
        {maleCategoriesList.map((category) => {
          {
            const oneCategory = menStore.filter(
              (item) => item.categories === category
            );
            return oneCategory.length > 0 ? (
              <div className="category-wrapper">
                <Typography variant="h5" className="category-header">
                  {category}
                </Typography>

                {oneCategory.map((item, index) => (
                  <>
                    {item.mainPic && item.media ? (
                      <ul>
                        <li>
                          <ImageRendering
                            key={index}
                            images={item.mainPic}
                            multiple={false}
                            width="auto"
                            height="300em"
                          />
                        </li>
                        <li className="item-name"> {item.name}</li>
                        <li>Sizes: {item.sizes}</li>
                        <li>Price: {item.price} $</li>
                      </ul>
                    ) : null}
                  </>
                ))}
              </div>
            ) : null;
          }
        })}
      </>
    </Holder>
  );
};

export default MenCategoriesPage;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  .category-wrapper {
    .category-header {
      ${fonts.bold}
    }
    margin: 1em 4em;
    .item-name {
      ${fonts.bold}
    }
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    ul {
      list-style: none;
      img {
        padding: 0;
      }
    }
  }
`;
