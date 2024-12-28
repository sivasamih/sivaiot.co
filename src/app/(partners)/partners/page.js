import * as APIURLS from "@/apis/apiconstant";
import * as FETCHAPI from "@/apis/fetchapi";
import PartnerProductListing from "@/components/compo/partners/partnerproductPage";
import { NewProduct } from "@/helper/helper";

async function GetAllCategoriesWithProduct() {
  let data;
  try {
    let res = await FETCHAPI.Fetch(APIURLS.APIURL.WebCategoryWiseProducts);
    if (res.status === 200) {
      data = await res.json();
      let id = 1;
      try {
        for (let L of data) {
          L.IsExpanded = false;
          L.IsClickable = true;
          L.IsExternalURL = false;
          L.id = id;
          id++;
        }
      } catch (ex) {}

      try {
        let hardCodeedProcuct = NewProduct ? NewProduct : [];
        if (hardCodeedProcuct.length > 0) {
          for (let L of hardCodeedProcuct) {
            L.IsExpanded = false;
            L.IsClickable = true;
            L.IsExternalURL = false;
            L.id = id;
            id++;
          }
        }
        data = [...data, ...hardCodeedProcuct];
      } catch (ex) {}
    }
  } catch (ex) {
    console.log("ex>>>", ex);
  }

  return data;
}

const PartnerPage = async () => {
  const Categories = await GetAllCategoriesWithProduct();
  return (
    <>
      <PartnerProductListing Categories={Categories} />
    </>
  );
};

export default PartnerPage;
