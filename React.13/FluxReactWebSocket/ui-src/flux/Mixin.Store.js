import Actions from './Actions';

var _mixinStoreData = {data2: {}};

var _mixinStoreExports = {getData2: function() { return this.data2; }};

var _mixinStoreActions = [Actions.gotData2];
function _gotData2(data) { this.data2 = data; this.emit('gotData2'); }

const MixinStoreObject = {
	mixins: [_mixinStoreData],
	exports: _mixinStoreExports,
	actions: _mixinStoreActions,
	gotData2: _gotData2
}
export default MixinStoreObject;
