// actions.js

export const FETCH_COVID_PROVINCE_STATISTICS = 'FETCH_COVID_PROVINCE_STATISTICS';
export const SET_COVID_PROVINCE_STATISTICS = 'SET_COVID_PROVINCE_STATISTICS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const fetchCovidProvinceStatistics = (iso) => ({
  type: FETCH_COVID_PROVINCE_STATISTICS,
  payload: iso
});

export const setCovidProvinceStatistics = (data) => ({
  type: SET_COVID_PROVINCE_STATISTICS,
  payload: data
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error
});
