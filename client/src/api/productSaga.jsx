import {
  PRODUCT_LIST,
  SEARCH_PRODUCT,
  SET_PRODUCT_LIST,
} from "../action/constant";
import { put, takeEvery } from "redux-saga/effects";

function* getProduct() {
  let data = yield fetch("http://localhost:3500/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProduct(data) {
  let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
  result = yield result.json();
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProduct);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;
