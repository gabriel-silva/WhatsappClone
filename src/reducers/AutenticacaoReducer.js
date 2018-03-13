import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loadLoading: false,
    loadCadastro: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICA_EMAIL: return { ...state, email: action.payload }
        case MODIFICA_SENHA: return { ...state, senha: action.payload }
        case MODIFICA_NOME: return { ...state, nome: action.payload }
        case CADASTRO_USUARIO_SUCESSO: return { ...state, nome: '', senha: '', loadCadastro: false }
        case CADASTRO_USUARIO_ERRO: return { ...state, erroCadastro: action.payload, loadCadastro: false }
        case LOGIN_USUARIO_ERRO: return { ...state, erroLogin: action.payload, loadLoading: false }
        case LOGIN_EM_ANDAMENTO: return { ...state, loadLoading: true }
        case CADASTRO_EM_ANDAMENTO: return { ...state, loadCadastro: true }
    }
    return state;
}