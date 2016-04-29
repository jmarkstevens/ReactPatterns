module.exports = {
	data3: {},
	onGotData3(data) { this.data3 = data; this.trigger('data3'); }
}

// init() { this.listenTo(Actions.gotData3, this.onGotData3); },
