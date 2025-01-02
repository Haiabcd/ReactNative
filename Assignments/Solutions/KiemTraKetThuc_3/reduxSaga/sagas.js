import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure } from './actions';
import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE } from './actions';

function fetchDataApi() {
  return axios.get('https://67219f8298bbb4d93ca9023e.mockapi.io/todo');
}

function* fetchDataSaga() {
  try {
    const response = yield call(fetchDataApi);
    yield put(fetchDataSuccess(response.data)); 
  } catch (error) {
    yield put(fetchDataFailure(error.message)); 
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}

// Hàm giả lập để thêm task
const addTaskApi = (task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Thay đổi logic này theo yêu cầu của bạn (giả lập thêm task thành công)
      resolve(task);
    }, 1000);
  });
};

// Saga để thêm task
function* addTask(action) {
  try {
    const task = yield call(addTaskApi, action.payload);
    yield put({ type: ADD_TASK_SUCCESS, payload: task });
  } catch (error) {
    yield put({ type: ADD_TASK_FAILURE, payload: error.message });
  }
}

// Theo dõi action ADD_TASK_REQUEST
export function* watchAddTask() {
  yield takeEvery(ADD_TASK_REQUEST, addTask);
}