var GraphView = Backbone.View.extend(
{
	className: 'graph',

	initialize: function ()
	{
		this.model.on('change:dataStatus', this.render, this);
		return this;
	},

	render: function ()
	{
		if (this.model.get('dataStatus') === DATA_STATUS.SUCCESS)
		{
			var arr = this.model.getDataForHours();
			// trim all the zeros:
			var end = arr.length;
			while (arr[end - 1] === 0) {
				end--;
			}
			var start = 0;
			while (arr[start] === 0) {
				start++;
			}
			// if (end >= start) return this;
			arr = arr.slice(start, end);

			for(var labels = [], i = 0;start<end;start++,i++){
				labels[i] = this._getHourLabel(start);
			}


			var lineChartData = {
				labels : labels,
				datasets : [
					{
						label: "bus-lines counter",
						fillColor : "rgba(220,220,250,0.7)",
						strokeColor : "rgba(150,150,220,1)",
						pointColor : "rgba(100,100,220,1)",
						pointStrokeColor : "#00a",
						pointHighlightFill : "#00f",
						pointHighlightStroke : "rgba(30,30,250,1)",
						data : arr
					}
				]
			};
			var $canvas = $('<canvas height="450" width="600"></canvas>');
			this.$el.html($canvas);
			//var ctx = document.getElementById("canvas").getContext("2d");
			var ctx = $canvas[0].getContext("2d");
			window.myLine = new Chart(ctx).Line(lineChartData, {
				responsive: true
			});
//
		}
		return this;
	},

	/**
	 * get the label for the hour, e.g.: for 9 return "09:00-10:00"
	 * @param hour {number} the hour, e.g.: 9
	 * @return displayHour {string} the label for the hour, e.g.: "09:00-10:00"
	 * @private
	 */
	_getHourLabel: function(hour) {
		var s = (hour<10 ? "0"+hour : hour) + ":00";
		hour++;
		var e = (hour<10 ? "0"+hour : hour) + ":00";
		return s + "-"+e;
	}
});