var PanelView = Backbone.View.extend(
{
	className: 'panel',

	events: {
		"click .refresh": "_refreshClick"
  	},

	initialize: function ()
	{
		this.$refreshButton = $('<button type="button" class="refresh">Refresh</button>');
		this.$status = $('<h5 class="status"></h5>');
		this.$el.html(this.$refreshButton)
			.append(this.$status);
		this.model.on('change:dataStatus', this.render, this);
		return this;
	},

	render: function ()
	{
		this.$refreshButton.show();
		switch (this.model.get('dataStatus'))
		{
			case DATA_STATUS.FAIL:
				this.$status.text('Fail to get data');
				break;
			case DATA_STATUS.SUCCESS:
				// take the 1st item for get the date
				var date = this.model.get('data')[0].start;
				this.$status.text('Data for ' + date.getDate() + '.' + (1+date.getMonth()) + '.' + date.getFullYear());
				break;
			case DATA_STATUS.NO_DATA:
				this.$status.text('No data');
				break;
			case DATA_STATUS.LOADING:
				this.$refreshButton.hide();
				this.$status.text('Loading...');
				break;
		}

		return this;
	},

	_refreshClick: function ()
	{
		this.model.loadData();
	}

});