export default {
	diskList(state) {
		return Object.keys(state.disks);
	},
	selectedDisk(state) {
		return state[state.activeManager].selectedDisk;
	},
	selectedDirectory(state) {
		return state[state.activeManager].selectedDirectory;
	},
	selectedItems(state, getters) {
		return getters[`${state.activeManager}/selectedList`];
	},
	inactiveManager(state) {
		return state.activeManager === 'left' ? 'right' : 'left';
	},
};
