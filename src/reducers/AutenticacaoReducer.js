const INITIAL_STATE = {
    nome: 'Gabriel',
    email: 'gabriel@gabriel',
    senha: '1234'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_email': return { ...state, email: action.payload }
        case 'modifica_senha': return { ...state, senha: action.payload }
        case 'modifica_nome': return { ...state, nome: action.payload }
    }
    return state;
}