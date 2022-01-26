import HTTP from './axios';

export default {
	createFile(disk, path, name) {
		return HTTP.post('create-file', { disk, path, name });
	},
	updateFile(formData) {
		return HTTP.post('update-file', formData);
	},
	createDirectory(data) {
		return HTTP.post('create-directory', data);
	},
	upload(data, config) {
		return HTTP.post('upload', data, config);
	},
	delete(data) {
		return HTTP.post('delete', data);
	},
	rename(data) {
		return HTTP.post('rename', data);
	},
	paste(data) {
		return HTTP.post('paste', data);
	},
	zip(data) {
		return HTTP.post('zip', data);
	},
	unzip(data) {
		return HTTP.post('unzip', data);
	},
};
