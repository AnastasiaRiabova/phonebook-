import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilterdTasks = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  },
);
export default {
  getLoading,
  getItems,
  getFilter,
  getFilterdTasks,
};
