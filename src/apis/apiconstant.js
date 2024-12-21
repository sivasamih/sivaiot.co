let domain = "https://nsimsapi.sivagroup.co/";

// let domain = "http://172.16.10.109:8082/"; // old local domain
// let domain = "http://10.20.20.18:8082/";
let basepath = "https://sivafiles.sivagroup.co/1/";

export const APIURL = {
  GetProductFamily: domain + "api/Website/GetProductFamily",
  WebCategoryWiseProducts: domain + "api/Website/WebCategoryWiseProducts",
  ProductDetailsByIndustries: domain + "api/Website/ProductDetailsByIndustries",
  WebFamilyWiseProducts: domain + "api/Website/WebFamilyWiseProducts",
  GetProductIndustriesDetails:
    domain + "api/Website/GetProductIndustriesDetails",
  WebsiteContentBySourceID: domain + "api/WebSite/WebsiteContentBySourceID",
  WebsiteContentByPostURL: domain + "api/WebSite/WebsiteContentByPostURL",
  Registration: domain + "api/Website/Registration",
  RegistrationValid: domain + "api/Website/RegistrationValid",
  Add_Update_WebsiteData: domain + "api/Website/Add_Update_WebsiteData",
  PartnerLogin: domain + "api/Website/PartnersLogin",
  SivaIOTNotification: domain + "api/Website/SivaIOTNotification",
  ProductDetailsByUrlName: domain + "api/Website/ProductDetailsByUrlName",
};

export const BASE_PATH = {
  Product: basepath + "images/product/",
  ProductImage: basepath + "images/productpage/",
  DatasheetsBaseUrl: basepath + "datasheets/",
  PartnersDatasheetsUrl: basepath + "partners/",
  SlidesImage: basepath + "slides/",
  ProductFamily: basepath + "images/product-family/",
  ProductIndustries: basepath + "images/product-Industries/",
  ProductCategory: basepath + "images/productcategory/",
  OthersImage: basepath + "images/others/",
  EventsImage: basepath + "images/events/",
  NewsImage: basepath + "images/news/",
  WB: basepath + "images/wb/",
  Others: basepath +  "others/",
};
