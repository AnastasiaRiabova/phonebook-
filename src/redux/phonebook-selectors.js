const getLoading = state => state.contacts.loading;

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getFilterdTasks = state => {
  const filter = getFilter(state);
  const items = getItems(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(el => el.name.toLowerCase().includes(normalizedFilter));
};

export default { getLoading, getItems, getFilter, getFilterdTasks };
