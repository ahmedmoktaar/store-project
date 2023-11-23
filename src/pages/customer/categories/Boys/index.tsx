import styled from "@emotion/styled";
import { useSelector } from "../../../../redux/Store/hooks";
import { maleCategoriesList } from "../../../../assets/data/GlobalVariables";
import { Typography } from "@mui/material";
import ImageRendering from "../../../../components/shared/ImageRendering";

const BoysCategoriesPage = () => {
  const boysStore = useSelector((state) => state.boys);

  return (
    <Holder>
      <>
        {maleCategoriesList.map((category) => {
          {
            const oneCategory = boysStore.filter(
              (item) => item.categories === category
            );
            return oneCategory.map((item, index) => (
              <div>
                <Typography variant="h5">{category}</Typography>
                {item.mainPic && item.media ? (
                  <ul>
                    <li>
                      <ImageRendering
                        key={index}
                        images={item.mainPic}
                        multiple={false}
                      />
                    </li>
                    <li>
                      <ImageRendering
                        key={index + "multi"}
                        images={item.media}
                        multiple={true}
                      />
                    </li>
                    <li>Name: {item.name}</li>
                    <li>Brand: {item.brand}</li>
                    <li>Colors: {item.colors}</li>
                    <li>Sizes: {item.sizes}</li>
                    <li>Gender: {item.gender}</li>
                    <li>Price: {item.price}</li>
                    <li>No. in Stock: {item.amountInStock}</li>
                    <li>Delivery Time: {item.deliveryTime}</li>
                  </ul>
                ) : null}
              </div>
            ));
          }
        })}
      </>
    </Holder>
  );
};

export default BoysCategoriesPage;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
`;
