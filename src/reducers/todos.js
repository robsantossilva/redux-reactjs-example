export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, {
        id: Math.floor(Math.random() * 1000),
        text: action.text,
      }]

    case 'REMOVE_TODO':
      return state.filter(todo => (todo.id !== action.id))

    default:
      return state;
  }
}
