import {
  CategoryInterface,
  GroupCategoryInterface,
} from "@interfaces/CategoryInterface";

export const sortCategoriesByGroup = (categories: CategoryInterface[]) => {
  const sortedCategories: GroupCategoryInterface = {};

  categories.forEach((category: CategoryInterface) => {
    if (Object.keys(sortedCategories).includes(category.group)) {
      return sortedCategories[category.group].push(category);
    }
    sortedCategories[category.group] = [];
    return sortedCategories[category.group].push(category);
  });

  return sortedCategories;
};
