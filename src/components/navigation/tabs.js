export const HOTELS_TAB = 'hotels';
export const EMPLOYEES_TAB = 'employees';
export const JOBS_TAB = 'jobs';
export const ROOMS_TAB = 'rooms';
export const RESERVATIONS_TAB = 'reservations';
export const CLIENTS_TAB = 'clients';
export const ADDRESSES_TAB = 'addresses';
export const CITIES_TAB = 'cities';
export const COUNTRIES_TAB = 'countries';

const TABS_MAPPING = {
  [HOTELS_TAB]: 0,
  [EMPLOYEES_TAB]: 1,
  [JOBS_TAB]: 2,
  [ROOMS_TAB]: 3,
  [RESERVATIONS_TAB]: 4,
  [CLIENTS_TAB]: 5,
  [ADDRESSES_TAB]: 6,
  [CITIES_TAB]: 7,
  [COUNTRIES_TAB]: 8,
};

export const currentTab = () => {
  const pathname = window.location.href + '/';

  for (const tabKey in TABS_MAPPING) {
    if (pathname.indexOf(`/${tabKey}/`) !== -1) {
      return TABS_MAPPING[tabKey];
    }
  }
  return 0;
};