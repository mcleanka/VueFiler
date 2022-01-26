import HTTP from './axios';

export default {
	initialize() {
		return HTTP.get('initialize');
	},
	tree(disk, path) {
		return HTTP.get('tree', { params: { disk, path } });
	},
	selectDisk(disk) {
		return HTTP.get('select-disk', { params: { disk } });
	},
	content(disk, path) {
		return HTTP.get('content', { params: { disk, path } });
	},
	properties(disk, path) {
		return HTTP.get('properties', { params: { disk, path } });
	},
	url(disk, path) {
		return HTTP.get('url', { params: { disk, path } });
	},
	getFile(disk, path) {
		return HTTP.get('download', { params: { disk, path } });
	},
	getFileArrayBuffer(disk, path) {
		return HTTP.get('download', {
			responseType: 'arraybuffer',
			params: { disk, path },
		});
	},
	thumbnail(disk, path) {
		return HTTP.get('thumbnails', {
			responseType: 'arraybuffer',
			params: { disk, path },
		});
	},
	preview(disk, path) {
		return HTTP.get('preview', {
			responseType: 'arraybuffer',
			params: { disk, path },
		});
	},
	download(disk, path) {
		return HTTP.get('download', {
			responseType: 'arraybuffer',
			params: { disk, path },
		});
	},
};
