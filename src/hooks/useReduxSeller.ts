import { useSelector } from "../redux/Store/hooks";

// ------------------
// main component
// ------------------
const useReduxSeller = () => {
  // --------------
  // redux slices
  // --------------
  const reduxSellersProducts = useSelector((state) => state.storeProducts.sellersProducts);
  const reduxSellerDetails = useSelector((state) => state.sellersDetails);

  // ----------------
  //  active seller
  // ----------------
  const activeSellersDetails = reduxSellerDetails.find((sellerDetails) => sellerDetails.isActive);
  const activeSellerID = activeSellersDetails?.id;
  const activeSellerIndex = reduxSellerDetails.findIndex((sellerDetails) => sellerDetails.isActive);
  const activeSellerProducts = reduxSellersProducts[activeSellerIndex  === -1 ? 0 :activeSellerIndex].sellerProduct;

  return {
    activeSellersDetails, 
    activeSellerID,
    activeSellerIndex,
    activeSellerProducts,
  };
};

export default useReduxSeller;
