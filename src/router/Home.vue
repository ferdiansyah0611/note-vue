<template>
	<div>
		<div class="flex space-y-2 flex-col">
			<div class="form-label">
				<label for="title">Title</label>
				<input id="title" placeholder="Your Title" v-model="note.input.title" type="text" name="title">
			</div>
			<div class="form-label">
				<label for="note">Note</label>
				<textarea id="note" placeholder="Your Note" v-model="note.input.note" name="note"/>
			</div>
			<div>
				<button class="btn primary" @click.prevent="save">Save</button>
			</div>
		</div>
		<div class="py-4">
			<span class="border-t border-gray-500 w-full"></span>
		</div>
		<div>
			<div class="form-label mb-2">
				<label for="search">Search Your Note</label>
				<input id="search" v-model="note.search" type="text" placeholder="Type Here">
			</div>
			<div v-if="note.search" class="list-note">
				<item-note v-for="d, i in note.result" :key="i" :data="d"></item-note>
			</div>
			<div v-else class="list-note">
				<item-note v-for="d, i in note.data" :key="i" :data="d"></item-note>
			</div>
		</div>
	</div>
</template>

<script>
import ItemNote from '../components/ItemNote.vue'
import {mapState} from 'vuex'
export default{
	components: {
		ItemNote
	},
	mounted(){
		this.$store.commit('getNote')
	},
	watch: {
    	'note.search'(val, old){
      		this.$store.commit('filterNote', val)
    	}
  	},
	methods: {
		save(){
			this.$store.commit('addNote')
		}
	},
	computed: mapState({
		'note': 'note',
	})
}
</script>