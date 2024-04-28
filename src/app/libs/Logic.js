import { categories } from "./Data";

export const paginate = (page, setPage, newDirection, imagesLength) => {
  let newPage = page + newDirection;

  if (newPage < 0) {
    newPage = imagesLength - 1;
  } else if (newPage >= imagesLength) {
    newPage = 0;
  }

  setPage(newPage);
};

export const sliderCat = () => {
  let newPageCat = page + newDirectionCat;

  if (newPageCat < 0) {
    newPageCat = categoriesLength - 4;
  } else if (newPageCat >= categoriesLength) newPageCat = 0;
};
