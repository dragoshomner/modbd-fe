export const HOTELS_TAB = 'hotels';
export const EMPLOYEES_TAB = 'employees';

const TABS_MAPPING = {
  [HOTELS_TAB]: 0,
  [EMPLOYEES_TAB]: 1
};

export const currentTab = () => {
  const path = window.location.pathname;
  const pathCode = path.split('/')[1] || HOTELS_TAB;
  return TABS_MAPPING[pathCode] || 0;
};