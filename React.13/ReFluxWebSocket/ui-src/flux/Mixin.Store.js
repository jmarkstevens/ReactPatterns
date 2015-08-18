import Reflux from 'reflux';

import Actions from './Actions';

function _gotData3(data) { this.data3 = data; this.trigger(); }
function _mixinStoreInit() { this.listenTo(Actions.gotData2, this.onGotData2); }

var MixinStoreObject = {
	data3: {},
	init: _mixinStoreInit,
	onGotData2: _gotData3
}
export default MixinStoreObject;
