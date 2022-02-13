const local = () => JSON.parse(localStorage.getItem('notes-vue'))
const insert = (data) => localStorage.setItem('notes-vue', JSON.stringify(data))

export default {
	state: {
		data: [],
		result: [],
		search: '',
		input: {
			id: '',
			title: '',
			note: '',
			createdAt: ''
		}
	},
	mutations: {
		getNote(state){
			var data = local()
			if(data){
				state.data = data
			}
		},
		filterNote(state, payload){
			var search = payload.toLowerCase()
			state.result = state.data.filter((data) => (
				data.title.toLowerCase().indexOf(search) !== -1 ||
				data.note.toLowerCase().indexOf(search) !== -1
			))
		},
		addNote(state, payload){
			if(state.input.id){
				state.data = state.data.map((data) => {
					if(data.id === state.input.id){
						data = Object.assign(state.input, {updatedAt: new Date()})
					}
					return data
				})
			}else{
				state.data.push({
					...state.input,
					id: crypto.randomUUID(),
					createdAt: new Date()
				})
			}
			insert(state.data)
			state.input = {
				id: '',
				title: '',
				note: '',
				createdAt: ''
			}
		},
		removeNote(state, payload){
			state.data = state.data.filter((data) => data.id !== payload)
			insert(state.data)
		},
		editNote(state, payload){
			state.input = state.data.find((data) => data.id === payload)
			insert(state.data)
		}
	}
}