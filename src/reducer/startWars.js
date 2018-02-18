import {START_WARS, START, SUCCESS, FAIL} from '../constants'

const defaultStore = {
    links: []
};

export default (state = defaultStore, action) => {
    const {type} = action;

    switch (type) {
        case START_WARS + START: {
            return state;
        }
        case  START_WARS + SUCCESS: {
            // Что ты этим хотел скачазть, у тебя defaultStore это просто объект
            // поставь вот тут дебагер и посмотри что тебе приходит в action, и запиши значение в state
            //defaultStore.setIn(['people', 'films', 'species', 'vehicles', 'starships']);
            return state
        }
        case START_WARS + FAIL: {
            return 'Connect is FAILED';
        }
        default: {
            return state;
        }
    }
}

/*

case LOAD_ARTICLE + START:
return articleState.setIn(['entities', payload.id, 'loading'], true)

case LOAD_ARTICLE + SUCCESS:
return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response))

case LOAD_ARTICLE_COMMENTS + START:
return articleState.setIn(['entities', payload.articleId, 'commentsLoading'], true)
*/
