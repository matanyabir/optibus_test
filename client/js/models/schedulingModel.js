/**
 * SchedulingModel - the scheduling of all bus lines.
 * 
 * @author Matanya
 */
var SchedulingModel = Backbone.Model.extend(
{
	// default values
	defaults:
	{
		data: [] // the array of the data of the bus lines
		,dataStatus: DATA_STATUS.NO_DATA // the status of the data in the "data" array
	}

	/**
	* get all the data from the service.
	*/
	,loadData: function ()
	{
		var that = this;
		that.set({dataStatus: DATA_STATUS.LOADING});
		Service.getData(function(data){
			that.set({
				dataStatus: data.length ? DATA_STATUS.SUCCESS : DATA_STATUS.NO_DATA,
				data: $.map(data , function( val, i ) {
					// we convert the time, so we will not need to do "getUTCHours" etc.:
					var s = new Date(val.startTime);
					var e = new Date(val.endTime);
					return {
						start: new Date(s.getTime() + s.getTimezoneOffset()*60000)
						,end: new Date(e.getTime() + e.getTimezoneOffset()*60000)
					};
				})
			});
		}, function(){
			that.set({
				dataStatus: DATA_STATUS.FAIL,
				data: []
			});
		});
	}

	/**
	* get array of 24 integers: how many buses are in each hour of the day
	* (item at index 0: how many buses between 00:00 to 00:59:59. item at index 1: how many buses between 01:00 to 01:59:59. etc.)
	* @return {array} hoursCount - array of 24 integers: how many buses are in each hour of the day
	*/
	,getDataForHours: function ()
	{
		var result = [];
		for (var i = 0; i < 24; i++) {
			result[i] = 0;
		}

		var arr = this.get('data'), len = arr.length;
		for (i = 0; i < len; i++) {
			var item = arr[i];
			// we empty the minutes & seconds for the hours calculation. we can move this code to the loadData for do it only once, but it will destroy the real data
			var start = new Date(item.start.getTime());
			start.setMinutes(0);
			start.setSeconds(0);
			start.setMilliseconds(0);
			//how many hours this item take
			var hours = (item.end.getTime() - start.getTime())/3600000; // 1 hour = 60*60*1000
			for (var j = start.getHours(); hours > 0 && j< 24; j++,hours--) {
				result[j]++;
			}
		}
		return result;

	}

});
