import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_COVID_PROVINCE_STATISTICS, setCovidProvinceStatistics, setLoading, setError } from './actions';

function* fetchCovidProvinceStatisticsSaga(action) {
  const url = `https://covid-19-statistics.p.rapidapi.com/reports/total?iso=${action.payload}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a53a18d2e3msh39783511353bf9bp1b2562jsnc3b9062846f6',
      'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
    }
  };

  try {
    yield put(setLoading(true));
    const response = yield call(fetch, url, options);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = yield response.text();
    yield put(setCovidProvinceStatistics(result));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_COVID_PROVINCE_STATISTICS, fetchCovidProvinceStatisticsSaga);
}
