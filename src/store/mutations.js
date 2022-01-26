export default {
	setDisks(state, disks) {
		state.disks = disks;
	},
	setClipboard(state, { type, disk, directories, files }) {
		state.clipboard.type = type;
		state.clipboard.disk = disk;
		state.clipboard.directories = directories;
		state.clipboard.files = files;
	},
	truncateClipboard(state, { type, path }) {
		const itemIndex = state.clipboard[type].indexOf(path);

		if (itemIndex !== -1) state.clipboard[type].splice(itemIndex, 1);
		if (!state.clipboard.directories.length && !state.clipboard.files.length) {
			state.clipboard.type = null;
		}
	},
	resetClipboard(state) {
		state.clipboard.type = null;
		state.clipboard.disk = null;
		state.clipboard.directories = [];
		state.clipboard.files = [];
	},
	setActiveManager(state, managerName) {
		state.activeManager = managerName;
	},
	setFileCallBack(state, callback) {
		state.fileCallback = callback;
	},
	screenToggle(state) {
		state.fullScreen = !state.fullScreen;
	},
	resetState(state) {
		state.activeManager = 'left';
		state.clipboard = {
			type: null,
			disk: null,
			directories: [],
			files: [],
		};
		state.disks = [];
		state.fileCallback = null;
		state.fullScreen = false;
	},
};
