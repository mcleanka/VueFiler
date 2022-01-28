import GET from '../../http/get';

export default {
	selectDirectory({ state, commit, dispatch, rootState }, { path, history }) {
		commit('setDirectoryContent', { directories: [], files: [] });

		return GET.content(state.selectedDisk, path).then((response) => {
			if (response.data.result.status === 'success') {
				commit('resetSelected');
				commit('resetSortSettings');
				commit('setDirectoryContent', response.data);
				commit('setSelectedDirectory', path);

				if (history) commit('addToHistory', path);

				if (
					rootState.fm.settings.windowsConfig === 2
					&& path
					&& response.data.directories.length
				) {
					dispatch('fm/tree/showSubdirectories', path, { root: true });
				}
			}
		});
	},
	refreshDirectory({ state, commit, dispatch }) {
		GET.content(state.selectedDisk, state.selectedDirectory).then((response) => {
			commit('resetSelected');
			commit('resetSortSettings');
			commit('resetHistory');

			if (state.selectedDirectory) commit('addToHistory', state.selectedDirectory);

			if (response.data.result.status === 'success') {
				commit('setDirectoryContent', response.data);
			} else if (response.data.result.status === 'danger') {
				commit('setSelectedDirectory', null);
				dispatch('refreshDirectory');
			}
		});
	},
	historyBack({ state, commit, dispatch }) {
		dispatch('selectDirectory', {
			path: state.history[state.historyPointer - 1],
			history: false,
		});
		commit('pointerBack');
	},
	historyForward({ state, commit, dispatch }) {
		dispatch('selectDirectory', {
			path: state.history[state.historyPointer + 1],
			history: false,
		});
		commit('pointerForward');
	},
	sortBy({ state, commit }, { field, direction }) {
		if (state.sort.field === field && !direction) {
			commit('setSortDirection', state.sort.direction === 'up' ? 'down' : 'up');
		} else if (direction) {
			commit('setSortDirection', direction);
			commit('setSortField', field);
		} else {
			commit('setSortDirection', 'up');
			commit('setSortField', field);
		}
		switch (field) {
			case 'name':
				commit('sortByName');
				break;
			case 'size':
				commit('sortBySize');
				break;
			case 'type':
				commit('sortByType');
				break;
			case 'date':
				commit('sortByDate');
				break;
			default:
				break;
		}
	},
};
