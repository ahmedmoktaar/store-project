import styled from "@emotion/styled";
import { useSelector } from "../../../../redux/Store/hooks";
import { maleCategoriesList } from "../../../../assets/data/GlobalVariables";
import { Typography } from "@mui/material";
import ImageRendering from "../../../../components/shared/ImageRendering";

const BabyCategoriesPage = () => {
  const babyStore = useSelector((state) => state.baby);
  
  return (
    <Holder>
      <>
        {babyStore.length > 1 ? (
          maleCategoriesList.map((category) => {
            {
              const oneCategory = babyStore.filter(
                (item) => item.categories === category
              );

              return oneCategory.map((item, index) => (
                <div key={index}>
                  <Typography variant="h5">{category}</Typography>
                  {item.mainPic && item.media ? (
                    <ul key={index}>
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
          })
        ) : (
          <p className="no-items">No Items Available At The Moment</p>
        )}
      </>
    </Holder>
  );
};

export default BabyCategoriesPage;

const Holder = styled.div`
  display: flex;
  flex-direction: column;

  .no-items {
    font-size: 1.5em;
    margin: auto auto;
  }
`;
