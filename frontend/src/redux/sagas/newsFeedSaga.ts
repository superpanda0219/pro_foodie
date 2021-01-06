import { call, put } from "redux-saga/effects";
import { CREATE_POST_START, GET_FEED_START } from "~/constants/actionType";
import { createPost, getNewsFeed } from "~/services/api";
import { setNewsFeedErrorMessage } from "../action/errorActions";
import { createPostSuccess, getNewsFeedSuccess } from "../action/feedActions";
import { isCreatingPost, isGettingFeed } from "../action/loadingActions";

interface INewsFeedSaga {
    type: string;
    payload: any;
}

function* newsFeedSaga({ type, payload }: INewsFeedSaga) {
    switch (type) {
        case GET_FEED_START:
            try {
                yield put(isGettingFeed(true));

                const posts = yield call(getNewsFeed, payload);

                yield put(isGettingFeed(false));
                yield put(getNewsFeedSuccess(posts));
            } catch (e) {
                console.log(e);
                yield put(isGettingFeed(false));
                yield put(setNewsFeedErrorMessage(e.error.message || 'Unknown error occured.'))
            }

            break;
        case CREATE_POST_START:
            try {
                yield put(isCreatingPost(true));

                const post = yield call(createPost, payload);

                yield put(createPostSuccess(post));
                yield put(isCreatingPost(false));
            } catch (e) {
                yield put(isCreatingPost(false));
                console.log(e);
            }
            break;
        default:
            throw new Error('Unexpected action type.')
    }
}

export default newsFeedSaga;