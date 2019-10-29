import { LOAD_PRODUCTS } from '../actions';
import { SET_PRODUCTS } from '../mutations';
import lojaApi from '@/api/lojaApi'

export default {
    state: {
        items: []
    },
    actions: {
        [LOAD_PRODUCTS]({ commit }) {
            return new Promise((resolve, reject) => {
                lojaApi.getProducts().then(response => {
                    //Sucesso
                    commit(SET_PRODUCTS, response.data);
                    resolve()
                })
                .catch(error => {
                    reject('Não foi possível carregar os dados')
                })
            });
        }
    },
    mutations: {
        [SET_PRODUCTS](state, payload) {
            state.items = payload.itens;
        }
    }
};