/**
 * Stab class for testing...
 */
var Service = (function()
{
	var me = {};

	/**
	 * get the data from the service
	 *
	 * @param {function} cbSuccess - the callback that should be call with the data
	 * @param {function} cbFail - the callback that should be call in case of fail
	 * @author Matanya
	 */
	me.getData = function(cbSuccess, cbFail)
	{
		setTimeout(function(){
			cbSuccess(_data);
			// test: return first 2 items:
			//cbSuccess(_data.slice(0,2));
		}, Math.random()*1000);
	}

	var _data = [
		{
			"startTime": "2015-04-01T11:10:00.000Z",
			"endTime": "2015-04-01T12:24:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T19:16:00.000Z",
			"endTime": "2015-04-01T20:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T13:13:00.000Z",
			"endTime": "2015-04-01T14:01:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T13:39:00.000Z",
			"endTime": "2015-04-01T15:02:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 47,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T14:44:00.000Z",
			"endTime": "2015-04-01T16:02:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T15:33:00.000Z",
			"endTime": "2015-04-01T17:33:00.000Z",
			"busType": "Urban",
			"originCode": 7,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T18:37:00.000Z",
			"endTime": "2015-04-01T20:22:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T16:41:00.000Z",
			"endTime": "2015-04-01T17:31:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 17,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T17:32:00.000Z",
			"endTime": "2015-04-01T18:49:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 41,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T08:50:00.000Z",
			"endTime": "2015-04-01T10:02:00.000Z",
			"busType": "Interurban",
			"originCode": 46,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T18:20:00.000Z",
			"endTime": "2015-04-01T20:01:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T04:49:00.000Z",
			"endTime": "2015-04-01T06:32:00.000Z",
			"busType": "Interurban",
			"originCode": 40,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T14:31:00.000Z",
			"endTime": "2015-04-01T16:06:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T14:35:00.000Z",
			"endTime": "2015-04-01T15:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T16:42:00.000Z",
			"endTime": "2015-04-01T17:36:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T17:48:00.000Z",
			"endTime": "2015-04-01T19:03:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T15:43:00.000Z",
			"endTime": "2015-04-01T17:17:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T15:23:00.000Z",
			"endTime": "2015-04-01T16:23:00.000Z",
			"busType": "Urban",
			"originCode": 28,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T10:18:00.000Z",
			"endTime": "2015-04-01T12:12:00.000Z",
			"busType": "Urban",
			"originCode": 45,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T14:13:00.000Z",
			"endTime": "2015-04-01T15:31:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 32,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T18:19:00.000Z",
			"endTime": "2015-04-01T19:26:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T08:24:00.000Z",
			"endTime": "2015-04-01T09:17:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T15:48:00.000Z",
			"endTime": "2015-04-01T17:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T05:30:00.000Z",
			"endTime": "2015-04-01T06:18:00.000Z",
			"busType": "Interurban",
			"originCode": 36,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T07:51:00.000Z",
			"endTime": "2015-04-01T09:20:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T19:48:00.000Z",
			"endTime": "2015-04-01T20:37:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 20,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T09:06:00.000Z",
			"endTime": "2015-04-01T10:03:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T14:05:00.000Z",
			"endTime": "2015-04-01T15:55:00.000Z",
			"busType": "Urban",
			"originCode": 9,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T10:08:00.000Z",
			"busType": "Urban",
			"originCode": 3,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T18:01:00.000Z",
			"endTime": "2015-04-01T19:46:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T09:20:00.000Z",
			"endTime": "2015-04-01T09:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T19:01:00.000Z",
			"endTime": "2015-04-01T19:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T06:26:00.000Z",
			"endTime": "2015-04-01T08:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T16:08:00.000Z",
			"endTime": "2015-04-01T18:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 50,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T20:31:00.000Z",
			"endTime": "2015-04-01T22:03:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T18:15:00.000Z",
			"endTime": "2015-04-01T19:30:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T21:48:00.000Z",
			"endTime": "2015-04-01T22:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T07:12:00.000Z",
			"endTime": "2015-04-01T08:34:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T06:14:00.000Z",
			"endTime": "2015-04-01T07:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T16:11:00.000Z",
			"endTime": "2015-04-01T16:42:00.000Z",
			"busType": "Urban",
			"originCode": 18,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T11:47:00.000Z",
			"endTime": "2015-04-01T12:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 27,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T19:26:00.000Z",
			"endTime": "2015-04-01T19:58:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 39,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T17:03:00.000Z",
			"endTime": "2015-04-01T18:33:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T21:03:00.000Z",
			"endTime": "2015-04-01T21:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 42,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T05:32:00.000Z",
			"endTime": "2015-04-01T07:17:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T13:27:00.000Z",
			"endTime": "2015-04-01T14:07:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T19:35:00.000Z",
			"endTime": "2015-04-01T21:30:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T17:47:00.000Z",
			"endTime": "2015-04-01T19:43:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 34,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T04:21:00.000Z",
			"endTime": "2015-04-01T05:21:00.000Z",
			"busType": "Urban",
			"originCode": 24,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T14:33:00.000Z",
			"endTime": "2015-04-01T16:33:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 45,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T15:06:00.000Z",
			"endTime": "2015-04-01T16:35:00.000Z",
			"busType": "Urban",
			"originCode": 30,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T07:53:00.000Z",
			"endTime": "2015-04-01T08:46:00.000Z",
			"busType": "Urban",
			"originCode": 3,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T12:19:00.000Z",
			"endTime": "2015-04-01T13:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T07:16:00.000Z",
			"endTime": "2015-04-01T08:27:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T07:34:00.000Z",
			"endTime": "2015-04-01T08:47:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T11:57:00.000Z",
			"endTime": "2015-04-01T13:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T06:57:00.000Z",
			"endTime": "2015-04-01T08:06:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T13:16:00.000Z",
			"endTime": "2015-04-01T14:21:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 34,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T08:35:00.000Z",
			"endTime": "2015-04-01T10:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T16:29:00.000Z",
			"endTime": "2015-04-01T17:07:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T18:05:00.000Z",
			"endTime": "2015-04-01T19:44:00.000Z",
			"busType": "Interurban",
			"originCode": 39,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T14:06:00.000Z",
			"endTime": "2015-04-01T14:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 32,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T18:56:00.000Z",
			"endTime": "2015-04-01T19:47:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T16:19:00.000Z",
			"endTime": "2015-04-01T17:18:00.000Z",
			"busType": "Interurban",
			"originCode": 3,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T18:37:00.000Z",
			"endTime": "2015-04-01T19:51:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T20:18:00.000Z",
			"endTime": "2015-04-01T22:06:00.000Z",
			"busType": "Interurban",
			"originCode": 1,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T21:57:00.000Z",
			"endTime": "2015-04-01T23:32:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T15:59:00.000Z",
			"endTime": "2015-04-01T17:59:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 42,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T15:42:00.000Z",
			"endTime": "2015-04-01T17:34:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 30,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T21:43:00.000Z",
			"endTime": "2015-04-01T23:29:00.000Z",
			"busType": "Urban",
			"originCode": 38,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T11:18:00.000Z",
			"endTime": "2015-04-01T12:21:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T09:46:00.000Z",
			"endTime": "2015-04-01T11:12:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T14:09:00.000Z",
			"endTime": "2015-04-01T14:53:00.000Z",
			"busType": "Interurban",
			"originCode": 11,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T18:51:00.000Z",
			"endTime": "2015-04-01T19:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T21:08:00.000Z",
			"endTime": "2015-04-01T22:59:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T17:04:00.000Z",
			"endTime": "2015-04-01T18:15:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T08:07:00.000Z",
			"endTime": "2015-04-01T09:25:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 15,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T17:25:00.000Z",
			"endTime": "2015-04-01T18:32:00.000Z",
			"busType": "Urban",
			"originCode": 17,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T14:02:00.000Z",
			"endTime": "2015-04-01T15:06:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T17:32:00.000Z",
			"endTime": "2015-04-01T18:56:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 21,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T23:26:00.000Z",
			"endTime": "2015-04-02T00:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T12:53:00.000Z",
			"endTime": "2015-04-01T13:53:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T08:51:00.000Z",
			"endTime": "2015-04-01T10:21:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T12:22:00.000Z",
			"endTime": "2015-04-01T13:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 26,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T11:03:00.000Z",
			"endTime": "2015-04-01T12:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T17:31:00.000Z",
			"endTime": "2015-04-01T18:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 7,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T08:32:00.000Z",
			"endTime": "2015-04-01T09:21:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T08:37:00.000Z",
			"endTime": "2015-04-01T10:28:00.000Z",
			"busType": "Interurban",
			"originCode": 29,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T11:48:00.000Z",
			"endTime": "2015-04-01T12:21:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T17:21:00.000Z",
			"endTime": "2015-04-01T19:04:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 27,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T16:08:00.000Z",
			"endTime": "2015-04-01T18:00:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T10:14:00.000Z",
			"endTime": "2015-04-01T11:24:00.000Z",
			"busType": "Urban",
			"originCode": 41,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T13:24:00.000Z",
			"endTime": "2015-04-01T14:47:00.000Z",
			"busType": "Urban",
			"originCode": 40,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T12:17:00.000Z",
			"endTime": "2015-04-01T13:17:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T16:08:00.000Z",
			"endTime": "2015-04-01T17:31:00.000Z",
			"busType": "Urban",
			"originCode": 35,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T18:51:00.000Z",
			"endTime": "2015-04-01T20:17:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T17:12:00.000Z",
			"endTime": "2015-04-01T18:09:00.000Z",
			"busType": "Urban",
			"originCode": 3,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T12:15:00.000Z",
			"endTime": "2015-04-01T14:06:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T13:44:00.000Z",
			"endTime": "2015-04-01T15:13:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T13:56:00.000Z",
			"endTime": "2015-04-01T15:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T14:11:00.000Z",
			"endTime": "2015-04-01T15:03:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T14:33:00.000Z",
			"endTime": "2015-04-01T16:12:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 16,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T17:03:00.000Z",
			"endTime": "2015-04-01T17:36:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T19:19:00.000Z",
			"endTime": "2015-04-01T20:54:00.000Z",
			"busType": "Urban",
			"originCode": 35,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T15:44:00.000Z",
			"endTime": "2015-04-01T17:10:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T19:06:00.000Z",
			"endTime": "2015-04-01T20:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T19:52:00.000Z",
			"endTime": "2015-04-01T20:25:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T18:11:00.000Z",
			"endTime": "2015-04-01T19:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T22:40:00.000Z",
			"endTime": "2015-04-01T23:57:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T17:30:00.000Z",
			"endTime": "2015-04-01T18:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T21:25:00.000Z",
			"endTime": "2015-04-01T22:24:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T15:07:00.000Z",
			"endTime": "2015-04-01T15:55:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T09:47:00.000Z",
			"endTime": "2015-04-01T11:07:00.000Z",
			"busType": "Urban",
			"originCode": 50,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T09:17:00.000Z",
			"endTime": "2015-04-01T10:34:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T20:03:00.000Z",
			"endTime": "2015-04-01T20:36:00.000Z",
			"busType": "Interurban",
			"originCode": 31,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T15:02:00.000Z",
			"endTime": "2015-04-01T17:02:00.000Z",
			"busType": "Urban",
			"originCode": 13,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T08:33:00.000Z",
			"endTime": "2015-04-01T09:59:00.000Z",
			"busType": "Interurban",
			"originCode": 46,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T12:19:00.000Z",
			"endTime": "2015-04-01T13:53:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T08:01:00.000Z",
			"endTime": "2015-04-01T09:23:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T09:58:00.000Z",
			"endTime": "2015-04-01T11:19:00.000Z",
			"busType": "Interurban",
			"originCode": 8,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T21:07:00.000Z",
			"endTime": "2015-04-01T22:16:00.000Z",
			"busType": "Urban",
			"originCode": 32,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T09:59:00.000Z",
			"endTime": "2015-04-01T10:59:00.000Z",
			"busType": "Urban",
			"originCode": 36,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T13:00:00.000Z",
			"endTime": "2015-04-01T14:03:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T07:14:00.000Z",
			"endTime": "2015-04-01T09:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 39,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T16:40:00.000Z",
			"endTime": "2015-04-01T17:45:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 39,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T16:39:00.000Z",
			"endTime": "2015-04-01T17:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 40,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T18:21:00.000Z",
			"endTime": "2015-04-01T19:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 24,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T13:12:00.000Z",
			"endTime": "2015-04-01T14:06:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T16:56:00.000Z",
			"endTime": "2015-04-01T17:44:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T13:44:00.000Z",
			"endTime": "2015-04-01T14:35:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T18:34:00.000Z",
			"endTime": "2015-04-01T19:59:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T19:42:00.000Z",
			"endTime": "2015-04-01T21:24:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T19:48:00.000Z",
			"endTime": "2015-04-01T21:46:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 7,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T19:25:00.000Z",
			"endTime": "2015-04-01T20:25:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T07:08:00.000Z",
			"endTime": "2015-04-01T08:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 23,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T17:12:00.000Z",
			"endTime": "2015-04-01T17:46:00.000Z",
			"busType": "Interurban",
			"originCode": 1,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T17:07:00.000Z",
			"endTime": "2015-04-01T18:54:00.000Z",
			"busType": "Interurban",
			"originCode": 36,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T22:27:00.000Z",
			"endTime": "2015-04-01T23:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 12,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T14:25:00.000Z",
			"endTime": "2015-04-01T15:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 49,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T22:20:00.000Z",
			"endTime": "2015-04-01T23:57:00.000Z",
			"busType": "Interurban",
			"originCode": 15,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T19:02:00.000Z",
			"endTime": "2015-04-01T19:58:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T21:07:00.000Z",
			"endTime": "2015-04-01T22:31:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 33,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T14:24:00.000Z",
			"endTime": "2015-04-01T15:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T21:14:00.000Z",
			"endTime": "2015-04-01T21:56:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T19:39:00.000Z",
			"endTime": "2015-04-01T21:28:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T07:10:00.000Z",
			"endTime": "2015-04-01T08:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 27,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T16:21:00.000Z",
			"endTime": "2015-04-01T17:10:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 30,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T09:07:00.000Z",
			"endTime": "2015-04-01T11:07:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T06:22:00.000Z",
			"endTime": "2015-04-01T07:26:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T17:29:00.000Z",
			"endTime": "2015-04-01T18:10:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 44,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T20:37:00.000Z",
			"endTime": "2015-04-01T21:23:00.000Z",
			"busType": "Urban",
			"originCode": 6,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T12:57:00.000Z",
			"endTime": "2015-04-01T13:27:00.000Z",
			"busType": "Urban",
			"originCode": 50,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T13:22:00.000Z",
			"endTime": "2015-04-01T14:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 39,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T19:24:00.000Z",
			"endTime": "2015-04-01T21:02:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T17:02:00.000Z",
			"endTime": "2015-04-01T17:52:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 33,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T14:52:00.000Z",
			"endTime": "2015-04-01T15:40:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T10:15:00.000Z",
			"endTime": "2015-04-01T11:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 26,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T12:27:00.000Z",
			"endTime": "2015-04-01T13:16:00.000Z",
			"busType": "Interurban",
			"originCode": 33,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T13:56:00.000Z",
			"endTime": "2015-04-01T15:42:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T16:10:00.000Z",
			"endTime": "2015-04-01T17:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 41,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T15:52:00.000Z",
			"endTime": "2015-04-01T17:01:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T16:23:00.000Z",
			"endTime": "2015-04-01T17:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T21:19:00.000Z",
			"endTime": "2015-04-01T23:04:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 2,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T11:26:00.000Z",
			"endTime": "2015-04-01T12:21:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T06:15:00.000Z",
			"endTime": "2015-04-01T07:26:00.000Z",
			"busType": "Urban",
			"originCode": 29,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T18:46:00.000Z",
			"endTime": "2015-04-01T19:31:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 15,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T19:54:00.000Z",
			"endTime": "2015-04-01T20:44:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T19:53:00.000Z",
			"endTime": "2015-04-01T21:24:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T08:30:00.000Z",
			"endTime": "2015-04-01T09:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T13:09:00.000Z",
			"endTime": "2015-04-01T14:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 15,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T11:41:00.000Z",
			"endTime": "2015-04-01T13:08:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 15,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T14:43:00.000Z",
			"endTime": "2015-04-01T15:15:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T09:20:00.000Z",
			"endTime": "2015-04-01T10:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T10:44:00.000Z",
			"endTime": "2015-04-01T12:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T11:24:00.000Z",
			"endTime": "2015-04-01T13:00:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 36,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T20:15:00.000Z",
			"endTime": "2015-04-01T20:56:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T19:14:00.000Z",
			"endTime": "2015-04-01T19:45:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T14:32:00.000Z",
			"endTime": "2015-04-01T15:08:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 11,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T11:42:00.000Z",
			"endTime": "2015-04-01T12:54:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T13:08:00.000Z",
			"endTime": "2015-04-01T14:28:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T19:20:00.000Z",
			"endTime": "2015-04-01T20:35:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T05:17:00.000Z",
			"endTime": "2015-04-01T06:25:00.000Z",
			"busType": "Urban",
			"originCode": 29,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T18:21:00.000Z",
			"endTime": "2015-04-01T19:54:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T10:32:00.000Z",
			"endTime": "2015-04-01T11:42:00.000Z",
			"busType": "Urban",
			"originCode": 7,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T10:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 19,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T16:45:00.000Z",
			"endTime": "2015-04-01T18:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T09:20:00.000Z",
			"endTime": "2015-04-01T10:46:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T12:09:00.000Z",
			"endTime": "2015-04-01T13:37:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T06:51:00.000Z",
			"endTime": "2015-04-01T08:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T17:47:00.000Z",
			"endTime": "2015-04-01T19:41:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T12:44:00.000Z",
			"endTime": "2015-04-01T13:56:00.000Z",
			"busType": "Urban",
			"originCode": 40,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T17:56:00.000Z",
			"endTime": "2015-04-01T19:52:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 1,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T09:48:00.000Z",
			"endTime": "2015-04-01T10:24:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T20:49:00.000Z",
			"endTime": "2015-04-01T22:14:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T08:49:00.000Z",
			"endTime": "2015-04-01T10:24:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 34,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T18:52:00.000Z",
			"endTime": "2015-04-01T20:42:00.000Z",
			"busType": "Urban",
			"originCode": 9,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T16:49:00.000Z",
			"endTime": "2015-04-01T18:18:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T10:54:00.000Z",
			"endTime": "2015-04-01T12:47:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T08:12:00.000Z",
			"endTime": "2015-04-01T09:40:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T15:41:00.000Z",
			"endTime": "2015-04-01T17:36:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T22:22:00.000Z",
			"endTime": "2015-04-01T23:55:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T15:24:00.000Z",
			"endTime": "2015-04-01T17:17:00.000Z",
			"busType": "Interurban",
			"originCode": 35,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T08:37:00.000Z",
			"endTime": "2015-04-01T10:35:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 7,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T19:00:00.000Z",
			"endTime": "2015-04-01T19:42:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 42,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T13:00:00.000Z",
			"endTime": "2015-04-01T13:37:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T19:26:00.000Z",
			"endTime": "2015-04-01T20:03:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T14:04:00.000Z",
			"endTime": "2015-04-01T14:36:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T15:03:00.000Z",
			"endTime": "2015-04-01T16:58:00.000Z",
			"busType": "Urban",
			"originCode": 34,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T20:27:00.000Z",
			"endTime": "2015-04-01T22:24:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T08:12:00.000Z",
			"endTime": "2015-04-01T09:03:00.000Z",
			"busType": "Interurban",
			"originCode": 28,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T07:30:00.000Z",
			"endTime": "2015-04-01T08:09:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T08:16:00.000Z",
			"endTime": "2015-04-01T09:44:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T08:50:00.000Z",
			"endTime": "2015-04-01T10:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 13,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T08:06:00.000Z",
			"endTime": "2015-04-01T08:57:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T08:21:00.000Z",
			"endTime": "2015-04-01T10:10:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T15:40:00.000Z",
			"endTime": "2015-04-01T17:35:00.000Z",
			"busType": "Urban",
			"originCode": 43,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T08:28:00.000Z",
			"endTime": "2015-04-01T10:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 7,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T13:45:00.000Z",
			"endTime": "2015-04-01T14:30:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T17:12:00.000Z",
			"endTime": "2015-04-01T17:47:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T10:55:00.000Z",
			"endTime": "2015-04-01T11:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 47,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T08:56:00.000Z",
			"endTime": "2015-04-01T10:33:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T09:29:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T20:19:00.000Z",
			"endTime": "2015-04-01T22:07:00.000Z",
			"busType": "Interurban",
			"originCode": 1,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T21:04:00.000Z",
			"endTime": "2015-04-01T21:59:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T21:02:00.000Z",
			"endTime": "2015-04-01T22:24:00.000Z",
			"busType": "Urban",
			"originCode": 4,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T14:44:00.000Z",
			"endTime": "2015-04-01T16:37:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T19:34:00.000Z",
			"endTime": "2015-04-01T21:29:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T07:09:00.000Z",
			"endTime": "2015-04-01T08:02:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T14:00:00.000Z",
			"endTime": "2015-04-01T15:27:00.000Z",
			"busType": "Urban",
			"originCode": 19,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T10:58:00.000Z",
			"endTime": "2015-04-01T11:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 24,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T07:01:00.000Z",
			"endTime": "2015-04-01T08:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T16:09:00.000Z",
			"endTime": "2015-04-01T16:46:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T18:33:00.000Z",
			"endTime": "2015-04-01T19:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T17:26:00.000Z",
			"endTime": "2015-04-01T19:09:00.000Z",
			"busType": "Interurban",
			"originCode": 17,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T08:44:00.000Z",
			"endTime": "2015-04-01T09:38:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T11:17:00.000Z",
			"endTime": "2015-04-01T12:24:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T12:31:00.000Z",
			"endTime": "2015-04-01T13:56:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T13:52:00.000Z",
			"endTime": "2015-04-01T15:09:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T14:30:00.000Z",
			"endTime": "2015-04-01T15:32:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T19:17:00.000Z",
			"endTime": "2015-04-01T20:53:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T06:39:00.000Z",
			"endTime": "2015-04-01T08:22:00.000Z",
			"busType": "Urban",
			"originCode": 45,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T09:15:00.000Z",
			"endTime": "2015-04-01T10:18:00.000Z",
			"busType": "Urban",
			"originCode": 45,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T07:31:00.000Z",
			"endTime": "2015-04-01T08:32:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T18:49:00.000Z",
			"endTime": "2015-04-01T20:19:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 9,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T12:33:00.000Z",
			"endTime": "2015-04-01T13:38:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T08:01:00.000Z",
			"endTime": "2015-04-01T08:37:00.000Z",
			"busType": "Interurban",
			"originCode": 28,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T15:13:00.000Z",
			"endTime": "2015-04-01T15:45:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 33,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T16:08:00.000Z",
			"endTime": "2015-04-01T17:31:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T18:01:00.000Z",
			"endTime": "2015-04-01T19:05:00.000Z",
			"busType": "Urban",
			"originCode": 7,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T09:31:00.000Z",
			"endTime": "2015-04-01T10:25:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T19:21:00.000Z",
			"endTime": "2015-04-01T20:25:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T16:46:00.000Z",
			"endTime": "2015-04-01T17:17:00.000Z",
			"busType": "Urban",
			"originCode": 9,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T20:52:00.000Z",
			"endTime": "2015-04-01T21:26:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 39,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T22:05:00.000Z",
			"endTime": "2015-04-01T23:07:00.000Z",
			"busType": "Interurban",
			"originCode": 33,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T18:54:00.000Z",
			"endTime": "2015-04-01T20:03:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T13:40:00.000Z",
			"endTime": "2015-04-01T14:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 26,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T17:51:00.000Z",
			"endTime": "2015-04-01T19:17:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T13:48:00.000Z",
			"endTime": "2015-04-01T14:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T08:11:00.000Z",
			"endTime": "2015-04-01T09:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T12:46:00.000Z",
			"endTime": "2015-04-01T14:02:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 6,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T09:04:00.000Z",
			"endTime": "2015-04-01T11:00:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 28,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T07:01:00.000Z",
			"endTime": "2015-04-01T07:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T18:47:00.000Z",
			"endTime": "2015-04-01T19:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T04:00:00.000Z",
			"endTime": "2015-04-01T04:56:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 35,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T13:37:00.000Z",
			"endTime": "2015-04-01T14:26:00.000Z",
			"busType": "Interurban",
			"originCode": 8,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T08:31:00.000Z",
			"endTime": "2015-04-01T09:42:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T07:11:00.000Z",
			"endTime": "2015-04-01T08:08:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T13:07:00.000Z",
			"endTime": "2015-04-01T14:00:00.000Z",
			"busType": "Urban",
			"originCode": 30,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T11:36:00.000Z",
			"endTime": "2015-04-01T12:06:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T09:41:00.000Z",
			"endTime": "2015-04-01T10:44:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T19:27:00.000Z",
			"endTime": "2015-04-01T20:04:00.000Z",
			"busType": "Interurban",
			"originCode": 40,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T21:51:00.000Z",
			"endTime": "2015-04-01T23:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T13:50:00.000Z",
			"endTime": "2015-04-01T14:29:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T15:54:00.000Z",
			"endTime": "2015-04-01T17:26:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T08:01:00.000Z",
			"endTime": "2015-04-01T09:10:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T22:46:00.000Z",
			"endTime": "2015-04-02T00:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T17:15:00.000Z",
			"endTime": "2015-04-01T19:13:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T08:31:00.000Z",
			"endTime": "2015-04-01T10:14:00.000Z",
			"busType": "Urban",
			"originCode": 38,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T21:38:00.000Z",
			"endTime": "2015-04-01T23:35:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 41,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T15:21:00.000Z",
			"endTime": "2015-04-01T15:59:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T21:10:00.000Z",
			"endTime": "2015-04-01T21:59:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 49,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T19:14:00.000Z",
			"endTime": "2015-04-01T20:02:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T04:04:00.000Z",
			"endTime": "2015-04-01T04:44:00.000Z",
			"busType": "Interurban",
			"originCode": 19,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T17:51:00.000Z",
			"endTime": "2015-04-01T18:32:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 37,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T08:59:00.000Z",
			"endTime": "2015-04-01T10:34:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T07:47:00.000Z",
			"endTime": "2015-04-01T09:18:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 43,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T21:32:00.000Z",
			"endTime": "2015-04-01T22:12:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 36,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T08:22:00.000Z",
			"endTime": "2015-04-01T09:45:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T13:24:00.000Z",
			"endTime": "2015-04-01T14:32:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T17:44:00.000Z",
			"endTime": "2015-04-01T19:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 13,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T07:19:00.000Z",
			"endTime": "2015-04-01T08:20:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 6,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T23:43:00.000Z",
			"endTime": "2015-04-02T00:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T15:58:00.000Z",
			"endTime": "2015-04-01T16:29:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T06:13:00.000Z",
			"endTime": "2015-04-01T07:17:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T21:00:00.000Z",
			"endTime": "2015-04-01T22:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 49,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T13:15:00.000Z",
			"endTime": "2015-04-01T14:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T22:10:00.000Z",
			"endTime": "2015-04-01T23:16:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T19:33:00.000Z",
			"endTime": "2015-04-01T20:39:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T16:38:00.000Z",
			"endTime": "2015-04-01T17:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 43,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T20:48:00.000Z",
			"endTime": "2015-04-01T22:35:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T20:37:00.000Z",
			"endTime": "2015-04-01T21:42:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 40,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T06:12:00.000Z",
			"endTime": "2015-04-01T07:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 39,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T10:16:00.000Z",
			"endTime": "2015-04-01T11:25:00.000Z",
			"busType": "Urban",
			"originCode": 41,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T17:25:00.000Z",
			"endTime": "2015-04-01T19:10:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T05:13:00.000Z",
			"endTime": "2015-04-01T06:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 29,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T14:48:00.000Z",
			"endTime": "2015-04-01T15:59:00.000Z",
			"busType": "Urban",
			"originCode": 24,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T06:23:00.000Z",
			"endTime": "2015-04-01T08:06:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T17:11:00.000Z",
			"endTime": "2015-04-01T18:32:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 30,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T18:03:00.000Z",
			"endTime": "2015-04-01T19:08:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T08:09:00.000Z",
			"endTime": "2015-04-01T09:24:00.000Z",
			"busType": "Urban",
			"originCode": 12,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T10:37:00.000Z",
			"endTime": "2015-04-01T11:30:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T16:58:00.000Z",
			"endTime": "2015-04-01T18:29:00.000Z",
			"busType": "Urban",
			"originCode": 23,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T14:09:00.000Z",
			"endTime": "2015-04-01T15:20:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T12:13:00.000Z",
			"endTime": "2015-04-01T13:18:00.000Z",
			"busType": "Interurban",
			"originCode": 48,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T11:57:00.000Z",
			"endTime": "2015-04-01T13:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 11,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T18:20:00.000Z",
			"endTime": "2015-04-01T20:15:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T17:31:00.000Z",
			"endTime": "2015-04-01T18:30:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 33,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T14:40:00.000Z",
			"endTime": "2015-04-01T15:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T13:17:00.000Z",
			"endTime": "2015-04-01T14:03:00.000Z",
			"busType": "Urban",
			"originCode": 35,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T20:46:00.000Z",
			"endTime": "2015-04-01T22:20:00.000Z",
			"busType": "Interurban",
			"originCode": 40,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T19:42:00.000Z",
			"endTime": "2015-04-01T20:23:00.000Z",
			"busType": "Urban",
			"originCode": 40,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T08:44:00.000Z",
			"endTime": "2015-04-01T09:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 45,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T08:17:00.000Z",
			"endTime": "2015-04-01T08:51:00.000Z",
			"busType": "Urban",
			"originCode": 7,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T16:15:00.000Z",
			"endTime": "2015-04-01T17:45:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T15:09:00.000Z",
			"endTime": "2015-04-01T16:21:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T09:28:00.000Z",
			"endTime": "2015-04-01T10:09:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T04:37:00.000Z",
			"endTime": "2015-04-01T06:24:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T10:14:00.000Z",
			"endTime": "2015-04-01T11:16:00.000Z",
			"busType": "Urban",
			"originCode": 46,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T12:14:00.000Z",
			"endTime": "2015-04-01T13:28:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 16,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T05:39:00.000Z",
			"endTime": "2015-04-01T07:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 50,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T18:01:00.000Z",
			"endTime": "2015-04-01T19:38:00.000Z",
			"busType": "Urban",
			"originCode": 14,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T13:02:00.000Z",
			"endTime": "2015-04-01T14:05:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 24,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T17:07:00.000Z",
			"endTime": "2015-04-01T18:27:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T07:08:00.000Z",
			"endTime": "2015-04-01T07:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T15:05:00.000Z",
			"endTime": "2015-04-01T16:59:00.000Z",
			"busType": "Urban",
			"originCode": 33,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T10:31:00.000Z",
			"endTime": "2015-04-01T11:36:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T09:17:00.000Z",
			"endTime": "2015-04-01T10:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 26,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T16:35:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 9,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T12:06:00.000Z",
			"endTime": "2015-04-01T12:52:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T18:57:00.000Z",
			"endTime": "2015-04-01T20:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T08:46:00.000Z",
			"endTime": "2015-04-01T09:37:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T15:03:00.000Z",
			"endTime": "2015-04-01T15:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T19:11:00.000Z",
			"endTime": "2015-04-01T20:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T15:11:00.000Z",
			"endTime": "2015-04-01T16:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T09:22:00.000Z",
			"endTime": "2015-04-01T11:20:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 36,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T10:04:00.000Z",
			"endTime": "2015-04-01T11:04:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T15:51:00.000Z",
			"endTime": "2015-04-01T17:30:00.000Z",
			"busType": "Interurban",
			"originCode": 28,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T07:15:00.000Z",
			"endTime": "2015-04-01T08:20:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T17:55:00.000Z",
			"endTime": "2015-04-01T19:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T08:28:00.000Z",
			"endTime": "2015-04-01T10:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T14:29:00.000Z",
			"endTime": "2015-04-01T16:16:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T10:59:00.000Z",
			"endTime": "2015-04-01T11:31:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 43,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T08:10:00.000Z",
			"endTime": "2015-04-01T09:28:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T10:00:00.000Z",
			"endTime": "2015-04-01T11:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T17:38:00.000Z",
			"endTime": "2015-04-01T18:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 17,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T08:10:00.000Z",
			"endTime": "2015-04-01T09:48:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T20:46:00.000Z",
			"endTime": "2015-04-01T22:20:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T17:26:00.000Z",
			"endTime": "2015-04-01T17:58:00.000Z",
			"busType": "Urban",
			"originCode": 4,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T10:39:00.000Z",
			"endTime": "2015-04-01T12:02:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T22:46:00.000Z",
			"endTime": "2015-04-01T23:32:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 13,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T16:15:00.000Z",
			"endTime": "2015-04-01T17:13:00.000Z",
			"busType": "Urban",
			"originCode": 34,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T19:32:00.000Z",
			"endTime": "2015-04-01T21:14:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T05:54:00.000Z",
			"endTime": "2015-04-01T07:53:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T13:05:00.000Z",
			"endTime": "2015-04-01T14:22:00.000Z",
			"busType": "Interurban",
			"originCode": 39,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T14:54:00.000Z",
			"endTime": "2015-04-01T16:09:00.000Z",
			"busType": "Interurban",
			"originCode": 31,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T09:14:00.000Z",
			"endTime": "2015-04-01T10:43:00.000Z",
			"busType": "Urban",
			"originCode": 37,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T19:28:00.000Z",
			"endTime": "2015-04-01T20:43:00.000Z",
			"busType": "Urban",
			"originCode": 46,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T19:12:00.000Z",
			"endTime": "2015-04-01T20:45:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T16:45:00.000Z",
			"endTime": "2015-04-01T17:34:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 46,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T05:13:00.000Z",
			"endTime": "2015-04-01T06:50:00.000Z",
			"busType": "Interurban",
			"originCode": 19,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T12:46:00.000Z",
			"endTime": "2015-04-01T13:56:00.000Z",
			"busType": "Interurban",
			"originCode": 9,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T14:28:00.000Z",
			"endTime": "2015-04-01T15:43:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 11,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T14:47:00.000Z",
			"endTime": "2015-04-01T15:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 45,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T16:42:00.000Z",
			"endTime": "2015-04-01T17:12:00.000Z",
			"busType": "Urban",
			"originCode": 35,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T16:14:00.000Z",
			"endTime": "2015-04-01T17:46:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T21:44:00.000Z",
			"endTime": "2015-04-01T23:19:00.000Z",
			"busType": "Interurban",
			"originCode": 9,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T04:33:00.000Z",
			"endTime": "2015-04-01T05:03:00.000Z",
			"busType": "Interurban",
			"originCode": 42,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T16:45:00.000Z",
			"endTime": "2015-04-01T17:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 24,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T20:43:00.000Z",
			"endTime": "2015-04-01T21:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 45,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T14:31:00.000Z",
			"endTime": "2015-04-01T15:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 41,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T14:11:00.000Z",
			"endTime": "2015-04-01T15:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 15,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T11:57:00.000Z",
			"endTime": "2015-04-01T13:34:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T15:39:00.000Z",
			"endTime": "2015-04-01T16:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T20:13:00.000Z",
			"endTime": "2015-04-01T21:45:00.000Z",
			"busType": "Urban",
			"originCode": 4,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T21:39:00.000Z",
			"endTime": "2015-04-01T22:39:00.000Z",
			"busType": "Urban",
			"originCode": 38,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T07:39:00.000Z",
			"endTime": "2015-04-01T09:22:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 32,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T19:33:00.000Z",
			"endTime": "2015-04-01T21:09:00.000Z",
			"busType": "Interurban",
			"originCode": 8,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T12:57:00.000Z",
			"endTime": "2015-04-01T13:54:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T16:07:00.000Z",
			"endTime": "2015-04-01T17:39:00.000Z",
			"busType": "Urban",
			"originCode": 36,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:30:00.000Z",
			"endTime": "2015-04-01T18:46:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 24,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T14:49:00.000Z",
			"endTime": "2015-04-01T15:33:00.000Z",
			"busType": "Interurban",
			"originCode": 32,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T07:43:00.000Z",
			"endTime": "2015-04-01T09:28:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T05:55:00.000Z",
			"endTime": "2015-04-01T07:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 11,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T09:04:00.000Z",
			"endTime": "2015-04-01T10:10:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 9,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T16:03:00.000Z",
			"endTime": "2015-04-01T16:52:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T07:16:00.000Z",
			"endTime": "2015-04-01T08:09:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T13:12:00.000Z",
			"endTime": "2015-04-01T13:51:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T10:15:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T20:18:00.000Z",
			"endTime": "2015-04-01T21:44:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 29,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T15:04:00.000Z",
			"endTime": "2015-04-01T15:36:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T06:38:00.000Z",
			"endTime": "2015-04-01T07:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 15,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T20:18:00.000Z",
			"endTime": "2015-04-01T22:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T10:33:00.000Z",
			"endTime": "2015-04-01T11:33:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T17:25:00.000Z",
			"endTime": "2015-04-01T17:56:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T22:11:00.000Z",
			"endTime": "2015-04-01T23:38:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T15:44:00.000Z",
			"endTime": "2015-04-01T16:19:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T08:34:00.000Z",
			"endTime": "2015-04-01T09:16:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T08:26:00.000Z",
			"endTime": "2015-04-01T10:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T08:26:00.000Z",
			"endTime": "2015-04-01T09:51:00.000Z",
			"busType": "Interurban",
			"originCode": 8,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T22:35:00.000Z",
			"endTime": "2015-04-01T23:53:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T06:32:00.000Z",
			"endTime": "2015-04-01T08:16:00.000Z",
			"busType": "Urban",
			"originCode": 29,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T08:49:00.000Z",
			"endTime": "2015-04-01T09:38:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 49,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T05:21:00.000Z",
			"endTime": "2015-04-01T06:32:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T17:16:00.000Z",
			"endTime": "2015-04-01T18:06:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 41,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T18:46:00.000Z",
			"endTime": "2015-04-01T19:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T17:35:00.000Z",
			"endTime": "2015-04-01T18:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T15:44:00.000Z",
			"endTime": "2015-04-01T17:42:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T18:26:00.000Z",
			"endTime": "2015-04-01T20:19:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T07:49:00.000Z",
			"endTime": "2015-04-01T09:02:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T09:53:00.000Z",
			"endTime": "2015-04-01T11:11:00.000Z",
			"busType": "Interurban",
			"originCode": 31,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T13:43:00.000Z",
			"endTime": "2015-04-01T15:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 46,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T12:43:00.000Z",
			"endTime": "2015-04-01T13:16:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T19:22:00.000Z",
			"endTime": "2015-04-01T21:20:00.000Z",
			"busType": "Urban",
			"originCode": 36,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T17:58:00.000Z",
			"endTime": "2015-04-01T18:43:00.000Z",
			"busType": "Interurban",
			"originCode": 17,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T17:00:00.000Z",
			"endTime": "2015-04-01T17:40:00.000Z",
			"busType": "Interurban",
			"originCode": 32,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T18:32:00.000Z",
			"endTime": "2015-04-01T20:04:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T07:29:00.000Z",
			"endTime": "2015-04-01T09:19:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T18:36:00.000Z",
			"endTime": "2015-04-01T19:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T18:59:00.000Z",
			"endTime": "2015-04-01T20:31:00.000Z",
			"busType": "Urban",
			"originCode": 3,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T17:41:00.000Z",
			"endTime": "2015-04-01T19:11:00.000Z",
			"busType": "Interurban",
			"originCode": 48,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T09:33:00.000Z",
			"endTime": "2015-04-01T11:09:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T17:22:00.000Z",
			"endTime": "2015-04-01T18:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T15:25:00.000Z",
			"endTime": "2015-04-01T16:35:00.000Z",
			"busType": "Interurban",
			"originCode": 33,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T21:24:00.000Z",
			"endTime": "2015-04-01T22:37:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 33,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T07:50:00.000Z",
			"endTime": "2015-04-01T08:29:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 28,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T16:04:00.000Z",
			"endTime": "2015-04-01T17:01:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 45,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T20:30:00.000Z",
			"endTime": "2015-04-01T21:51:00.000Z",
			"busType": "Interurban",
			"originCode": 42,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T06:57:00.000Z",
			"endTime": "2015-04-01T07:45:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 42,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T17:08:00.000Z",
			"endTime": "2015-04-01T18:18:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T14:27:00.000Z",
			"endTime": "2015-04-01T15:14:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T17:02:00.000Z",
			"endTime": "2015-04-01T18:44:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T05:26:00.000Z",
			"endTime": "2015-04-01T06:01:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T15:41:00.000Z",
			"endTime": "2015-04-01T16:46:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 37,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T15:07:00.000Z",
			"endTime": "2015-04-01T16:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T14:47:00.000Z",
			"endTime": "2015-04-01T16:44:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T13:02:00.000Z",
			"endTime": "2015-04-01T13:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 43,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T15:59:00.000Z",
			"endTime": "2015-04-01T16:56:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 27,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T07:05:00.000Z",
			"endTime": "2015-04-01T08:29:00.000Z",
			"busType": "Interurban",
			"originCode": 2,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T14:00:00.000Z",
			"endTime": "2015-04-01T15:12:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 19,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T20:38:00.000Z",
			"endTime": "2015-04-01T22:25:00.000Z",
			"busType": "Urban",
			"originCode": 41,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T20:52:00.000Z",
			"endTime": "2015-04-01T21:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T21:40:00.000Z",
			"endTime": "2015-04-01T23:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T06:09:00.000Z",
			"endTime": "2015-04-01T06:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 27,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T19:07:00.000Z",
			"endTime": "2015-04-01T20:10:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T16:33:00.000Z",
			"endTime": "2015-04-01T17:32:00.000Z",
			"busType": "Urban",
			"originCode": 23,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T11:20:00.000Z",
			"endTime": "2015-04-01T12:36:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T14:49:00.000Z",
			"endTime": "2015-04-01T15:45:00.000Z",
			"busType": "Urban",
			"originCode": 3,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T05:17:00.000Z",
			"endTime": "2015-04-01T06:18:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T16:01:00.000Z",
			"endTime": "2015-04-01T17:22:00.000Z",
			"busType": "Urban",
			"originCode": 35,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T06:46:00.000Z",
			"endTime": "2015-04-01T08:01:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T13:26:00.000Z",
			"endTime": "2015-04-01T15:03:00.000Z",
			"busType": "Urban",
			"originCode": 7,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T09:15:00.000Z",
			"endTime": "2015-04-01T10:54:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 26,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T11:20:00.000Z",
			"endTime": "2015-04-01T12:58:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 13,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T16:25:00.000Z",
			"endTime": "2015-04-01T17:52:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T10:23:00.000Z",
			"endTime": "2015-04-01T12:17:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 31,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T08:56:00.000Z",
			"endTime": "2015-04-01T10:30:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T14:12:00.000Z",
			"endTime": "2015-04-01T14:47:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T21:17:00.000Z",
			"endTime": "2015-04-01T22:08:00.000Z",
			"busType": "Interurban",
			"originCode": 9,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T06:43:00.000Z",
			"endTime": "2015-04-01T07:17:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T14:44:00.000Z",
			"endTime": "2015-04-01T16:01:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 21,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T12:14:00.000Z",
			"endTime": "2015-04-01T14:01:00.000Z",
			"busType": "Urban",
			"originCode": 46,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T13:12:00.000Z",
			"endTime": "2015-04-01T14:20:00.000Z",
			"busType": "Urban",
			"originCode": 32,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T20:24:00.000Z",
			"endTime": "2015-04-01T21:21:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 21,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T13:03:00.000Z",
			"endTime": "2015-04-01T14:58:00.000Z",
			"busType": "Urban",
			"originCode": 14,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T15:15:00.000Z",
			"endTime": "2015-04-01T16:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 39,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T08:47:00.000Z",
			"endTime": "2015-04-01T10:41:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T16:22:00.000Z",
			"endTime": "2015-04-01T17:06:00.000Z",
			"busType": "Interurban",
			"originCode": 17,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T12:39:00.000Z",
			"endTime": "2015-04-01T13:43:00.000Z",
			"busType": "Interurban",
			"originCode": 29,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T13:27:00.000Z",
			"endTime": "2015-04-01T14:36:00.000Z",
			"busType": "Interurban",
			"originCode": 42,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T16:16:00.000Z",
			"endTime": "2015-04-01T17:00:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T06:35:00.000Z",
			"endTime": "2015-04-01T08:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T14:38:00.000Z",
			"endTime": "2015-04-01T16:38:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 27,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T12:48:00.000Z",
			"endTime": "2015-04-01T14:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 13,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T08:02:00.000Z",
			"endTime": "2015-04-01T08:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T17:58:00.000Z",
			"endTime": "2015-04-01T18:45:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T11:03:00.000Z",
			"endTime": "2015-04-01T11:33:00.000Z",
			"busType": "Interurban",
			"originCode": 40,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T10:58:00.000Z",
			"endTime": "2015-04-01T12:45:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 46,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T09:08:00.000Z",
			"endTime": "2015-04-01T10:34:00.000Z",
			"busType": "Urban",
			"originCode": 38,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T04:59:00.000Z",
			"endTime": "2015-04-01T05:32:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T08:14:00.000Z",
			"endTime": "2015-04-01T09:29:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T20:34:00.000Z",
			"endTime": "2015-04-01T22:33:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T14:28:00.000Z",
			"endTime": "2015-04-01T15:10:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 41,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T08:14:00.000Z",
			"endTime": "2015-04-01T09:19:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 47,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T08:23:00.000Z",
			"endTime": "2015-04-01T09:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 47,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T22:07:00.000Z",
			"endTime": "2015-04-01T22:42:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T18:32:00.000Z",
			"endTime": "2015-04-01T19:28:00.000Z",
			"busType": "Urban",
			"originCode": 43,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T21:05:00.000Z",
			"endTime": "2015-04-01T22:04:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T10:51:00.000Z",
			"endTime": "2015-04-01T11:45:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T09:58:00.000Z",
			"endTime": "2015-04-01T10:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 28,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T21:45:00.000Z",
			"endTime": "2015-04-01T22:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T05:23:00.000Z",
			"endTime": "2015-04-01T06:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T19:06:00.000Z",
			"endTime": "2015-04-01T20:43:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T17:58:00.000Z",
			"endTime": "2015-04-01T18:34:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 29,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T11:12:00.000Z",
			"endTime": "2015-04-01T12:04:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T21:39:00.000Z",
			"endTime": "2015-04-01T23:00:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T13:01:00.000Z",
			"endTime": "2015-04-01T13:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T17:40:00.000Z",
			"endTime": "2015-04-01T19:30:00.000Z",
			"busType": "Urban",
			"originCode": 33,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T20:54:00.000Z",
			"endTime": "2015-04-01T22:25:00.000Z",
			"busType": "Interurban",
			"originCode": 29,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T08:23:00.000Z",
			"endTime": "2015-04-01T09:24:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 29,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T09:50:00.000Z",
			"endTime": "2015-04-01T10:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 24,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T14:29:00.000Z",
			"endTime": "2015-04-01T15:51:00.000Z",
			"busType": "Urban",
			"originCode": 28,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T15:13:00.000Z",
			"endTime": "2015-04-01T16:19:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 49,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T15:51:00.000Z",
			"endTime": "2015-04-01T16:25:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 42,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T12:30:00.000Z",
			"endTime": "2015-04-01T13:39:00.000Z",
			"busType": "Urban",
			"originCode": 48,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T17:41:00.000Z",
			"endTime": "2015-04-01T19:17:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T05:09:00.000Z",
			"endTime": "2015-04-01T06:00:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T19:48:00.000Z",
			"endTime": "2015-04-01T20:23:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T15:00:00.000Z",
			"endTime": "2015-04-01T15:55:00.000Z",
			"busType": "Interurban",
			"originCode": 11,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T10:07:00.000Z",
			"endTime": "2015-04-01T10:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 29,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T19:03:00.000Z",
			"endTime": "2015-04-01T20:02:00.000Z",
			"busType": "Urban",
			"originCode": 9,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T07:33:00.000Z",
			"endTime": "2015-04-01T09:26:00.000Z",
			"busType": "Urban",
			"originCode": 32,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T08:12:00.000Z",
			"endTime": "2015-04-01T10:09:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T16:31:00.000Z",
			"endTime": "2015-04-01T17:01:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T06:37:00.000Z",
			"endTime": "2015-04-01T07:12:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T17:56:00.000Z",
			"endTime": "2015-04-01T19:17:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 19,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T06:36:00.000Z",
			"endTime": "2015-04-01T07:53:00.000Z",
			"busType": "Urban",
			"originCode": 18,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T14:26:00.000Z",
			"endTime": "2015-04-01T15:17:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 40,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T15:31:00.000Z",
			"endTime": "2015-04-01T16:24:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 1,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T16:08:00.000Z",
			"endTime": "2015-04-01T17:12:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 32,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T18:23:00.000Z",
			"endTime": "2015-04-01T19:27:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T17:36:00.000Z",
			"endTime": "2015-04-01T18:25:00.000Z",
			"busType": "Interurban",
			"originCode": 48,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T12:57:00.000Z",
			"endTime": "2015-04-01T14:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T08:48:00.000Z",
			"endTime": "2015-04-01T10:11:00.000Z",
			"busType": "Urban",
			"originCode": 9,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T11:18:00.000Z",
			"endTime": "2015-04-01T12:42:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T14:05:00.000Z",
			"endTime": "2015-04-01T14:40:00.000Z",
			"busType": "Urban",
			"originCode": 50,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T10:11:00.000Z",
			"endTime": "2015-04-01T11:35:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T08:17:00.000Z",
			"endTime": "2015-04-01T09:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 25,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T10:25:00.000Z",
			"endTime": "2015-04-01T11:58:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T08:15:00.000Z",
			"endTime": "2015-04-01T09:10:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T10:51:00.000Z",
			"endTime": "2015-04-01T12:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T15:05:00.000Z",
			"endTime": "2015-04-01T15:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T08:02:00.000Z",
			"endTime": "2015-04-01T09:01:00.000Z",
			"busType": "Urban",
			"originCode": 10,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T13:24:00.000Z",
			"endTime": "2015-04-01T14:16:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T07:19:00.000Z",
			"endTime": "2015-04-01T07:54:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 32,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T06:20:00.000Z",
			"endTime": "2015-04-01T06:54:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 23,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T15:16:00.000Z",
			"endTime": "2015-04-01T16:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T07:27:00.000Z",
			"endTime": "2015-04-01T08:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T14:56:00.000Z",
			"endTime": "2015-04-01T16:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 15,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T20:29:00.000Z",
			"endTime": "2015-04-01T22:01:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 25,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T09:54:00.000Z",
			"endTime": "2015-04-01T11:47:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T14:23:00.000Z",
			"endTime": "2015-04-01T15:49:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T11:43:00.000Z",
			"endTime": "2015-04-01T12:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T14:23:00.000Z",
			"endTime": "2015-04-01T15:55:00.000Z",
			"busType": "Urban",
			"originCode": 45,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T09:59:00.000Z",
			"endTime": "2015-04-01T10:49:00.000Z",
			"busType": "Urban",
			"originCode": 17,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T11:56:00.000Z",
			"endTime": "2015-04-01T13:01:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T08:50:00.000Z",
			"endTime": "2015-04-01T10:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 31,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T13:40:00.000Z",
			"endTime": "2015-04-01T15:13:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 42,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T22:18:00.000Z",
			"endTime": "2015-04-02T00:14:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T20:30:00.000Z",
			"endTime": "2015-04-01T21:01:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 11,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T18:09:00.000Z",
			"endTime": "2015-04-01T19:24:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T16:25:00.000Z",
			"endTime": "2015-04-01T16:59:00.000Z",
			"busType": "Interurban",
			"originCode": 33,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T18:33:00.000Z",
			"endTime": "2015-04-01T19:50:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T12:27:00.000Z",
			"endTime": "2015-04-01T13:20:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T14:15:00.000Z",
			"endTime": "2015-04-01T15:04:00.000Z",
			"busType": "Urban",
			"originCode": 40,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T16:05:00.000Z",
			"endTime": "2015-04-01T17:21:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T18:01:00.000Z",
			"endTime": "2015-04-01T19:32:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T17:31:00.000Z",
			"endTime": "2015-04-01T19:12:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T14:53:00.000Z",
			"endTime": "2015-04-01T15:24:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T05:27:00.000Z",
			"endTime": "2015-04-01T07:07:00.000Z",
			"busType": "Urban",
			"originCode": 6,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T16:21:00.000Z",
			"endTime": "2015-04-01T17:11:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T18:16:00.000Z",
			"endTime": "2015-04-01T20:02:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T14:15:00.000Z",
			"endTime": "2015-04-01T15:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 45,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T20:01:00.000Z",
			"endTime": "2015-04-01T21:56:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T11:13:00.000Z",
			"endTime": "2015-04-01T11:44:00.000Z",
			"busType": "Interurban",
			"originCode": 9,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T06:32:00.000Z",
			"endTime": "2015-04-01T07:28:00.000Z",
			"busType": "Interurban",
			"originCode": 11,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T04:25:00.000Z",
			"endTime": "2015-04-01T05:54:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T17:36:00.000Z",
			"endTime": "2015-04-01T18:31:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T17:25:00.000Z",
			"endTime": "2015-04-01T19:10:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 50,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T15:10:00.000Z",
			"endTime": "2015-04-01T15:41:00.000Z",
			"busType": "Interurban",
			"originCode": 46,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T13:08:00.000Z",
			"endTime": "2015-04-01T14:21:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 45,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T16:26:00.000Z",
			"endTime": "2015-04-01T17:46:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T15:27:00.000Z",
			"endTime": "2015-04-01T16:10:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 9,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T12:04:00.000Z",
			"endTime": "2015-04-01T13:11:00.000Z",
			"busType": "Interurban",
			"originCode": 48,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T14:57:00.000Z",
			"endTime": "2015-04-01T16:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 13,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T19:09:00.000Z",
			"endTime": "2015-04-01T20:25:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 17,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T06:32:00.000Z",
			"endTime": "2015-04-01T07:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 1,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T05:57:00.000Z",
			"endTime": "2015-04-01T06:56:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 13,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T19:40:00.000Z",
			"endTime": "2015-04-01T20:42:00.000Z",
			"busType": "Urban",
			"originCode": 20,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T13:08:00.000Z",
			"endTime": "2015-04-01T14:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T08:15:00.000Z",
			"endTime": "2015-04-01T10:11:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T14:26:00.000Z",
			"endTime": "2015-04-01T15:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T18:12:00.000Z",
			"endTime": "2015-04-01T20:02:00.000Z",
			"busType": "Interurban",
			"originCode": 39,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T19:06:00.000Z",
			"endTime": "2015-04-01T20:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 30,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T17:34:00.000Z",
			"endTime": "2015-04-01T19:15:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T15:35:00.000Z",
			"endTime": "2015-04-01T16:53:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T13:15:00.000Z",
			"endTime": "2015-04-01T14:08:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T10:49:00.000Z",
			"endTime": "2015-04-01T11:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T07:38:00.000Z",
			"endTime": "2015-04-01T09:07:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T06:53:00.000Z",
			"endTime": "2015-04-01T08:09:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T12:47:00.000Z",
			"endTime": "2015-04-01T14:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T18:24:00.000Z",
			"endTime": "2015-04-01T20:24:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T15:15:00.000Z",
			"endTime": "2015-04-01T16:15:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T17:40:00.000Z",
			"endTime": "2015-04-01T18:53:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T06:41:00.000Z",
			"endTime": "2015-04-01T08:21:00.000Z",
			"busType": "Urban",
			"originCode": 20,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T14:11:00.000Z",
			"endTime": "2015-04-01T15:57:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T16:48:00.000Z",
			"endTime": "2015-04-01T17:51:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T10:25:00.000Z",
			"endTime": "2015-04-01T11:32:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T15:34:00.000Z",
			"endTime": "2015-04-01T17:33:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T08:18:00.000Z",
			"endTime": "2015-04-01T09:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T16:57:00.000Z",
			"endTime": "2015-04-01T18:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T06:29:00.000Z",
			"endTime": "2015-04-01T08:18:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 26,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T17:10:00.000Z",
			"endTime": "2015-04-01T18:18:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T06:51:00.000Z",
			"endTime": "2015-04-01T07:21:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T17:17:00.000Z",
			"endTime": "2015-04-01T18:06:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T15:42:00.000Z",
			"endTime": "2015-04-01T17:36:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T17:14:00.000Z",
			"endTime": "2015-04-01T17:45:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 9,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T22:35:00.000Z",
			"endTime": "2015-04-01T23:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T15:05:00.000Z",
			"endTime": "2015-04-01T15:54:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 25,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T11:05:00.000Z",
			"endTime": "2015-04-01T12:28:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T19:34:00.000Z",
			"endTime": "2015-04-01T21:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T06:44:00.000Z",
			"endTime": "2015-04-01T07:16:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T20:38:00.000Z",
			"endTime": "2015-04-01T22:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T16:30:00.000Z",
			"endTime": "2015-04-01T18:15:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T09:00:00.000Z",
			"endTime": "2015-04-01T10:46:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T05:16:00.000Z",
			"endTime": "2015-04-01T07:12:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T08:32:00.000Z",
			"endTime": "2015-04-01T09:42:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T07:26:00.000Z",
			"endTime": "2015-04-01T08:22:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T18:05:00.000Z",
			"endTime": "2015-04-01T19:35:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T07:08:00.000Z",
			"endTime": "2015-04-01T08:13:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T12:56:00.000Z",
			"endTime": "2015-04-01T14:01:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T20:47:00.000Z",
			"endTime": "2015-04-01T22:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 28,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T17:33:00.000Z",
			"endTime": "2015-04-01T18:18:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T17:40:00.000Z",
			"endTime": "2015-04-01T19:32:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T11:10:00.000Z",
			"endTime": "2015-04-01T12:33:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 12,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T09:43:00.000Z",
			"endTime": "2015-04-01T10:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 6,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T10:14:00.000Z",
			"endTime": "2015-04-01T11:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T15:24:00.000Z",
			"endTime": "2015-04-01T16:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T15:29:00.000Z",
			"endTime": "2015-04-01T17:24:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T16:09:00.000Z",
			"endTime": "2015-04-01T17:17:00.000Z",
			"busType": "Urban",
			"originCode": 17,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T08:32:00.000Z",
			"endTime": "2015-04-01T09:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T16:00:00.000Z",
			"endTime": "2015-04-01T17:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T08:08:00.000Z",
			"endTime": "2015-04-01T09:43:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T22:04:00.000Z",
			"endTime": "2015-04-01T23:00:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 49,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T18:51:00.000Z",
			"endTime": "2015-04-01T20:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 33,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T18:26:00.000Z",
			"endTime": "2015-04-01T20:02:00.000Z",
			"busType": "Urban",
			"originCode": 36,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T07:43:00.000Z",
			"endTime": "2015-04-01T08:17:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T19:22:00.000Z",
			"endTime": "2015-04-01T20:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T16:57:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T08:55:00.000Z",
			"endTime": "2015-04-01T10:06:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 20,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T21:19:00.000Z",
			"endTime": "2015-04-01T23:10:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T08:23:00.000Z",
			"endTime": "2015-04-01T10:13:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T23:48:00.000Z",
			"endTime": "2015-04-02T00:39:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T09:44:00.000Z",
			"endTime": "2015-04-01T10:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T18:23:00.000Z",
			"endTime": "2015-04-01T19:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 2,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T16:41:00.000Z",
			"endTime": "2015-04-01T17:20:00.000Z",
			"busType": "Urban",
			"originCode": 12,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T13:44:00.000Z",
			"endTime": "2015-04-01T15:34:00.000Z",
			"busType": "Interurban",
			"originCode": 15,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T15:01:00.000Z",
			"endTime": "2015-04-01T15:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T09:45:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 26,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T14:36:00.000Z",
			"endTime": "2015-04-01T16:25:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T11:58:00.000Z",
			"endTime": "2015-04-01T12:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 15,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T20:28:00.000Z",
			"endTime": "2015-04-01T22:25:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T18:12:00.000Z",
			"endTime": "2015-04-01T19:55:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T15:50:00.000Z",
			"endTime": "2015-04-01T17:38:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T19:13:00.000Z",
			"endTime": "2015-04-01T19:51:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T08:16:00.000Z",
			"endTime": "2015-04-01T09:57:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 2,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T21:09:00.000Z",
			"endTime": "2015-04-01T22:58:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:44:00.000Z",
			"endTime": "2015-04-01T18:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 7,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T12:16:00.000Z",
			"endTime": "2015-04-01T14:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T15:23:00.000Z",
			"endTime": "2015-04-01T16:51:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 19,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T09:39:00.000Z",
			"endTime": "2015-04-01T10:09:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T19:25:00.000Z",
			"endTime": "2015-04-01T21:05:00.000Z",
			"busType": "Interurban",
			"originCode": 48,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T12:00:00.000Z",
			"endTime": "2015-04-01T13:52:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T10:34:00.000Z",
			"endTime": "2015-04-01T11:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T06:06:00.000Z",
			"endTime": "2015-04-01T06:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 7,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T07:53:00.000Z",
			"endTime": "2015-04-01T09:23:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T17:03:00.000Z",
			"endTime": "2015-04-01T18:42:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T11:20:00.000Z",
			"endTime": "2015-04-01T11:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T09:42:00.000Z",
			"endTime": "2015-04-01T11:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T10:21:00.000Z",
			"endTime": "2015-04-01T11:58:00.000Z",
			"busType": "Urban",
			"originCode": 30,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T16:56:00.000Z",
			"endTime": "2015-04-01T17:57:00.000Z",
			"busType": "Urban",
			"originCode": 29,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T07:20:00.000Z",
			"endTime": "2015-04-01T09:09:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T17:51:00.000Z",
			"endTime": "2015-04-01T19:21:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T13:16:00.000Z",
			"endTime": "2015-04-01T14:56:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T13:50:00.000Z",
			"endTime": "2015-04-01T15:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:15:00.000Z",
			"endTime": "2015-04-01T19:02:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T16:47:00.000Z",
			"endTime": "2015-04-01T17:45:00.000Z",
			"busType": "Urban",
			"originCode": 19,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T09:30:00.000Z",
			"endTime": "2015-04-01T10:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T18:07:00.000Z",
			"endTime": "2015-04-01T19:38:00.000Z",
			"busType": "Interurban",
			"originCode": 28,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T19:39:00.000Z",
			"endTime": "2015-04-01T20:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T13:19:00.000Z",
			"endTime": "2015-04-01T14:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T18:17:00.000Z",
			"endTime": "2015-04-01T18:58:00.000Z",
			"busType": "Urban",
			"originCode": 6,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T11:20:00.000Z",
			"endTime": "2015-04-01T12:20:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T21:19:00.000Z",
			"endTime": "2015-04-01T22:10:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T06:26:00.000Z",
			"endTime": "2015-04-01T08:17:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:55:00.000Z",
			"endTime": "2015-04-01T19:29:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T13:05:00.000Z",
			"endTime": "2015-04-01T14:55:00.000Z",
			"busType": "Interurban",
			"originCode": 2,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T20:04:00.000Z",
			"endTime": "2015-04-01T20:35:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 29,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T18:09:00.000Z",
			"endTime": "2015-04-01T19:16:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T17:41:00.000Z",
			"endTime": "2015-04-01T19:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 41,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T13:24:00.000Z",
			"endTime": "2015-04-01T13:58:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T07:44:00.000Z",
			"endTime": "2015-04-01T08:42:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T17:54:00.000Z",
			"endTime": "2015-04-01T19:15:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 24,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T12:28:00.000Z",
			"endTime": "2015-04-01T14:18:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 25,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T15:08:00.000Z",
			"endTime": "2015-04-01T16:44:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T16:57:00.000Z",
			"endTime": "2015-04-01T18:00:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T15:49:00.000Z",
			"endTime": "2015-04-01T17:37:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T20:30:00.000Z",
			"endTime": "2015-04-01T21:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T16:10:00.000Z",
			"endTime": "2015-04-01T17:31:00.000Z",
			"busType": "Urban",
			"originCode": 18,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T07:17:00.000Z",
			"endTime": "2015-04-01T07:53:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 2,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T16:10:00.000Z",
			"endTime": "2015-04-01T16:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T10:53:00.000Z",
			"endTime": "2015-04-01T11:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T12:11:00.000Z",
			"endTime": "2015-04-01T12:45:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T13:15:00.000Z",
			"endTime": "2015-04-01T15:00:00.000Z",
			"busType": "Urban",
			"originCode": 17,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T19:37:00.000Z",
			"endTime": "2015-04-01T21:11:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 45,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T21:36:00.000Z",
			"endTime": "2015-04-01T22:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 26,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T09:47:00.000Z",
			"endTime": "2015-04-01T11:25:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T08:19:00.000Z",
			"endTime": "2015-04-01T09:25:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T07:05:00.000Z",
			"endTime": "2015-04-01T08:00:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 31,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T16:37:00.000Z",
			"endTime": "2015-04-01T18:07:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T16:47:00.000Z",
			"endTime": "2015-04-01T18:46:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T16:44:00.000Z",
			"endTime": "2015-04-01T18:23:00.000Z",
			"busType": "Urban",
			"originCode": 29,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T20:45:00.000Z",
			"endTime": "2015-04-01T21:39:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T06:39:00.000Z",
			"endTime": "2015-04-01T08:14:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T11:37:00.000Z",
			"endTime": "2015-04-01T12:38:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T22:41:00.000Z",
			"endTime": "2015-04-01T23:35:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 45,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T16:47:00.000Z",
			"endTime": "2015-04-01T17:26:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T14:48:00.000Z",
			"endTime": "2015-04-01T16:33:00.000Z",
			"busType": "Urban",
			"originCode": 34,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T19:13:00.000Z",
			"endTime": "2015-04-01T19:55:00.000Z",
			"busType": "Urban",
			"originCode": 4,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T10:41:00.000Z",
			"endTime": "2015-04-01T12:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T17:21:00.000Z",
			"endTime": "2015-04-01T18:08:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T17:43:00.000Z",
			"endTime": "2015-04-01T19:04:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 34,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T11:38:00.000Z",
			"endTime": "2015-04-01T12:52:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T16:30:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T06:41:00.000Z",
			"endTime": "2015-04-01T07:43:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 42,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T11:22:00.000Z",
			"endTime": "2015-04-01T12:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T20:49:00.000Z",
			"endTime": "2015-04-01T21:41:00.000Z",
			"busType": "Interurban",
			"originCode": 9,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T08:33:00.000Z",
			"endTime": "2015-04-01T09:12:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T14:44:00.000Z",
			"endTime": "2015-04-01T16:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 41,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T15:22:00.000Z",
			"endTime": "2015-04-01T16:30:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T05:47:00.000Z",
			"endTime": "2015-04-01T07:39:00.000Z",
			"busType": "Urban",
			"originCode": 28,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T14:35:00.000Z",
			"endTime": "2015-04-01T16:31:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 11,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T17:18:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Interurban",
			"originCode": 11,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T17:29:00.000Z",
			"endTime": "2015-04-01T18:03:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T11:22:00.000Z",
			"endTime": "2015-04-01T12:08:00.000Z",
			"busType": "Urban",
			"originCode": 9,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T21:44:00.000Z",
			"endTime": "2015-04-01T23:03:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T23:56:00.000Z",
			"endTime": "2015-04-02T01:34:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T22:09:00.000Z",
			"endTime": "2015-04-01T23:57:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T10:51:00.000Z",
			"endTime": "2015-04-01T12:19:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 1,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T15:03:00.000Z",
			"endTime": "2015-04-01T15:51:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T20:52:00.000Z",
			"endTime": "2015-04-01T21:51:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 26,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T15:33:00.000Z",
			"endTime": "2015-04-01T17:06:00.000Z",
			"busType": "Urban",
			"originCode": 29,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T18:40:00.000Z",
			"endTime": "2015-04-01T20:29:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T07:18:00.000Z",
			"endTime": "2015-04-01T08:46:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T22:20:00.000Z",
			"endTime": "2015-04-01T23:32:00.000Z",
			"busType": "Interurban",
			"originCode": 15,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T08:30:00.000Z",
			"endTime": "2015-04-01T09:38:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T19:25:00.000Z",
			"endTime": "2015-04-01T20:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T08:59:00.000Z",
			"endTime": "2015-04-01T10:06:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 39,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T12:20:00.000Z",
			"endTime": "2015-04-01T13:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T11:20:00.000Z",
			"endTime": "2015-04-01T11:53:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T06:27:00.000Z",
			"endTime": "2015-04-01T07:03:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T09:06:00.000Z",
			"endTime": "2015-04-01T09:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T20:25:00.000Z",
			"endTime": "2015-04-01T21:35:00.000Z",
			"busType": "Interurban",
			"originCode": 8,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T07:37:00.000Z",
			"endTime": "2015-04-01T08:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 27,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T16:10:00.000Z",
			"endTime": "2015-04-01T17:16:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T08:28:00.000Z",
			"endTime": "2015-04-01T09:23:00.000Z",
			"busType": "Interurban",
			"originCode": 2,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T16:06:00.000Z",
			"endTime": "2015-04-01T17:54:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T18:03:00.000Z",
			"endTime": "2015-04-01T18:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 20,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T20:55:00.000Z",
			"endTime": "2015-04-01T22:01:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 49,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T10:51:00.000Z",
			"endTime": "2015-04-01T11:42:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 49,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T16:48:00.000Z",
			"endTime": "2015-04-01T17:30:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T13:22:00.000Z",
			"endTime": "2015-04-01T14:04:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T10:50:00.000Z",
			"endTime": "2015-04-01T12:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T08:20:00.000Z",
			"endTime": "2015-04-01T09:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 2,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T05:52:00.000Z",
			"endTime": "2015-04-01T07:20:00.000Z",
			"busType": "Interurban",
			"originCode": 17,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T17:16:00.000Z",
			"endTime": "2015-04-01T17:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T09:17:00.000Z",
			"endTime": "2015-04-01T09:52:00.000Z",
			"busType": "Urban",
			"originCode": 41,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T10:20:00.000Z",
			"endTime": "2015-04-01T11:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T17:49:00.000Z",
			"endTime": "2015-04-01T18:35:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 46,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T20:09:00.000Z",
			"endTime": "2015-04-01T21:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 50,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T19:52:00.000Z",
			"endTime": "2015-04-01T21:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 43,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T08:38:00.000Z",
			"endTime": "2015-04-01T09:31:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 26,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T10:10:00.000Z",
			"endTime": "2015-04-01T11:40:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T18:17:00.000Z",
			"endTime": "2015-04-01T18:56:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T12:04:00.000Z",
			"endTime": "2015-04-01T13:43:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T16:23:00.000Z",
			"endTime": "2015-04-01T18:15:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T07:55:00.000Z",
			"endTime": "2015-04-01T09:55:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T17:32:00.000Z",
			"endTime": "2015-04-01T18:43:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 39,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T22:02:00.000Z",
			"endTime": "2015-04-01T23:29:00.000Z",
			"busType": "Urban",
			"originCode": 34,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T08:52:00.000Z",
			"endTime": "2015-04-01T09:31:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T09:59:00.000Z",
			"endTime": "2015-04-01T10:35:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T17:31:00.000Z",
			"endTime": "2015-04-01T18:46:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 29,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T11:17:00.000Z",
			"endTime": "2015-04-01T12:09:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T19:00:00.000Z",
			"endTime": "2015-04-01T20:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 15,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T12:57:00.000Z",
			"endTime": "2015-04-01T14:36:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T19:04:00.000Z",
			"endTime": "2015-04-01T19:34:00.000Z",
			"busType": "Interurban",
			"originCode": 42,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T22:44:00.000Z",
			"endTime": "2015-04-02T00:05:00.000Z",
			"busType": "Interurban",
			"originCode": 29,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T19:26:00.000Z",
			"endTime": "2015-04-01T21:22:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T16:25:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 40,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T20:58:00.000Z",
			"endTime": "2015-04-01T22:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T18:13:00.000Z",
			"endTime": "2015-04-01T19:53:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T16:08:00.000Z",
			"endTime": "2015-04-01T17:19:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T06:33:00.000Z",
			"endTime": "2015-04-01T08:21:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 10,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T17:31:00.000Z",
			"endTime": "2015-04-01T18:58:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T19:51:00.000Z",
			"endTime": "2015-04-01T20:43:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T14:38:00.000Z",
			"endTime": "2015-04-01T16:17:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T05:23:00.000Z",
			"endTime": "2015-04-01T06:20:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T08:47:00.000Z",
			"endTime": "2015-04-01T10:32:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T10:36:00.000Z",
			"endTime": "2015-04-01T11:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T13:57:00.000Z",
			"endTime": "2015-04-01T15:02:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:22:00.000Z",
			"endTime": "2015-04-01T18:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T12:00:00.000Z",
			"endTime": "2015-04-01T13:33:00.000Z",
			"busType": "Interurban",
			"originCode": 1,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T16:40:00.000Z",
			"endTime": "2015-04-01T17:10:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T19:11:00.000Z",
			"endTime": "2015-04-01T19:47:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T20:53:00.000Z",
			"endTime": "2015-04-01T21:33:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 31,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T12:04:00.000Z",
			"endTime": "2015-04-01T12:48:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T07:51:00.000Z",
			"endTime": "2015-04-01T09:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 20,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T19:28:00.000Z",
			"endTime": "2015-04-01T20:28:00.000Z",
			"busType": "Urban",
			"originCode": 6,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T06:40:00.000Z",
			"endTime": "2015-04-01T08:14:00.000Z",
			"busType": "Interurban",
			"originCode": 43,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T19:21:00.000Z",
			"endTime": "2015-04-01T21:13:00.000Z",
			"busType": "Urban",
			"originCode": 38,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T07:02:00.000Z",
			"endTime": "2015-04-01T09:01:00.000Z",
			"busType": "Urban",
			"originCode": 30,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T09:39:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T20:59:00.000Z",
			"endTime": "2015-04-01T21:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T19:18:00.000Z",
			"endTime": "2015-04-01T20:07:00.000Z",
			"busType": "Interurban",
			"originCode": 11,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T11:14:00.000Z",
			"endTime": "2015-04-01T11:50:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T11:02:00.000Z",
			"endTime": "2015-04-01T12:43:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T18:55:00.000Z",
			"endTime": "2015-04-01T19:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T13:49:00.000Z",
			"endTime": "2015-04-01T14:45:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 36,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T20:28:00.000Z",
			"endTime": "2015-04-01T21:02:00.000Z",
			"busType": "Urban",
			"originCode": 13,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T16:24:00.000Z",
			"endTime": "2015-04-01T17:34:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T07:14:00.000Z",
			"endTime": "2015-04-01T08:01:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T19:10:00.000Z",
			"endTime": "2015-04-01T19:54:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 28,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T11:26:00.000Z",
			"endTime": "2015-04-01T12:46:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 40,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T18:13:00.000Z",
			"endTime": "2015-04-01T19:15:00.000Z",
			"busType": "Interurban",
			"originCode": 1,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T23:25:00.000Z",
			"endTime": "2015-04-02T00:52:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T12:46:00.000Z",
			"endTime": "2015-04-01T13:56:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T18:12:00.000Z",
			"endTime": "2015-04-01T18:49:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T16:35:00.000Z",
			"endTime": "2015-04-01T17:09:00.000Z",
			"busType": "Interurban",
			"originCode": 2,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T09:06:00.000Z",
			"endTime": "2015-04-01T10:25:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 30,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T11:08:00.000Z",
			"endTime": "2015-04-01T12:44:00.000Z",
			"busType": "Urban",
			"originCode": 13,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T20:08:00.000Z",
			"endTime": "2015-04-01T21:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T18:38:00.000Z",
			"endTime": "2015-04-01T19:35:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T08:45:00.000Z",
			"endTime": "2015-04-01T09:58:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T18:59:00.000Z",
			"endTime": "2015-04-01T20:56:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 36,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T08:06:00.000Z",
			"endTime": "2015-04-01T09:36:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T19:26:00.000Z",
			"endTime": "2015-04-01T20:37:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T14:42:00.000Z",
			"endTime": "2015-04-01T15:33:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T13:56:00.000Z",
			"endTime": "2015-04-01T15:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 49,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T15:27:00.000Z",
			"endTime": "2015-04-01T17:09:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T08:56:00.000Z",
			"endTime": "2015-04-01T10:02:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T16:16:00.000Z",
			"endTime": "2015-04-01T17:26:00.000Z",
			"busType": "Urban",
			"originCode": 40,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T10:13:00.000Z",
			"endTime": "2015-04-01T11:10:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T09:49:00.000Z",
			"endTime": "2015-04-01T10:51:00.000Z",
			"busType": "Urban",
			"originCode": 14,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T15:05:00.000Z",
			"endTime": "2015-04-01T16:01:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T06:03:00.000Z",
			"endTime": "2015-04-01T06:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 11,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T05:48:00.000Z",
			"endTime": "2015-04-01T07:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T14:22:00.000Z",
			"endTime": "2015-04-01T15:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 13,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T19:42:00.000Z",
			"endTime": "2015-04-01T21:20:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T16:56:00.000Z",
			"endTime": "2015-04-01T18:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 39,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T08:57:00.000Z",
			"endTime": "2015-04-01T10:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T20:04:00.000Z",
			"endTime": "2015-04-01T21:26:00.000Z",
			"busType": "Interurban",
			"originCode": 36,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T14:00:00.000Z",
			"endTime": "2015-04-01T15:54:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 24,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T14:51:00.000Z",
			"endTime": "2015-04-01T15:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T08:56:00.000Z",
			"endTime": "2015-04-01T10:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T06:04:00.000Z",
			"endTime": "2015-04-01T06:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 13,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T17:06:00.000Z",
			"endTime": "2015-04-01T17:41:00.000Z",
			"busType": "Urban",
			"originCode": 32,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T19:27:00.000Z",
			"endTime": "2015-04-01T20:06:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 23,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:21:00.000Z",
			"endTime": "2015-04-01T19:10:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 32,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T20:48:00.000Z",
			"endTime": "2015-04-01T22:31:00.000Z",
			"busType": "Urban",
			"originCode": 23,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T04:49:00.000Z",
			"endTime": "2015-04-01T06:46:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T12:07:00.000Z",
			"endTime": "2015-04-01T13:57:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T07:44:00.000Z",
			"endTime": "2015-04-01T08:28:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T17:37:00.000Z",
			"endTime": "2015-04-01T19:11:00.000Z",
			"busType": "Urban",
			"originCode": 48,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T08:31:00.000Z",
			"endTime": "2015-04-01T09:31:00.000Z",
			"busType": "Urban",
			"originCode": 10,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T21:23:00.000Z",
			"endTime": "2015-04-01T21:54:00.000Z",
			"busType": "Interurban",
			"originCode": 47,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T11:01:00.000Z",
			"endTime": "2015-04-01T12:58:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T18:02:00.000Z",
			"endTime": "2015-04-01T19:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T05:43:00.000Z",
			"endTime": "2015-04-01T06:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T18:07:00.000Z",
			"endTime": "2015-04-01T18:53:00.000Z",
			"busType": "Urban",
			"originCode": 6,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T23:33:00.000Z",
			"endTime": "2015-04-02T01:07:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T18:21:00.000Z",
			"endTime": "2015-04-01T19:10:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T21:46:00.000Z",
			"endTime": "2015-04-01T22:56:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T13:45:00.000Z",
			"endTime": "2015-04-01T14:28:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T11:47:00.000Z",
			"endTime": "2015-04-01T12:22:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T18:42:00.000Z",
			"endTime": "2015-04-01T19:45:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T19:27:00.000Z",
			"endTime": "2015-04-01T20:52:00.000Z",
			"busType": "Urban",
			"originCode": 20,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T11:32:00.000Z",
			"endTime": "2015-04-01T12:25:00.000Z",
			"busType": "Urban",
			"originCode": 10,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T23:40:00.000Z",
			"endTime": "2015-04-02T01:12:00.000Z",
			"busType": "Interurban",
			"originCode": 32,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T08:21:00.000Z",
			"endTime": "2015-04-01T09:05:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T12:40:00.000Z",
			"endTime": "2015-04-01T14:06:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T19:46:00.000Z",
			"endTime": "2015-04-01T20:16:00.000Z",
			"busType": "Urban",
			"originCode": 33,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T08:56:00.000Z",
			"endTime": "2015-04-01T09:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 27,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T17:35:00.000Z",
			"endTime": "2015-04-01T18:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T13:08:00.000Z",
			"endTime": "2015-04-01T13:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 33,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T17:49:00.000Z",
			"endTime": "2015-04-01T19:49:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T17:50:00.000Z",
			"endTime": "2015-04-01T18:45:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T13:11:00.000Z",
			"endTime": "2015-04-01T14:11:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T10:23:00.000Z",
			"endTime": "2015-04-01T11:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 12,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T09:13:00.000Z",
			"endTime": "2015-04-01T09:43:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T22:00:00.000Z",
			"endTime": "2015-04-01T22:43:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 49,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T12:35:00.000Z",
			"endTime": "2015-04-01T13:31:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 41,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T16:53:00.000Z",
			"endTime": "2015-04-01T18:00:00.000Z",
			"busType": "Urban",
			"originCode": 49,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T18:09:00.000Z",
			"endTime": "2015-04-01T19:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 12,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T12:53:00.000Z",
			"endTime": "2015-04-01T13:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T11:53:00.000Z",
			"endTime": "2015-04-01T13:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T19:22:00.000Z",
			"endTime": "2015-04-01T20:57:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T17:45:00.000Z",
			"endTime": "2015-04-01T19:14:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T08:45:00.000Z",
			"endTime": "2015-04-01T10:10:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T20:50:00.000Z",
			"endTime": "2015-04-01T21:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T20:10:00.000Z",
			"endTime": "2015-04-01T21:18:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 27,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T11:33:00.000Z",
			"endTime": "2015-04-01T13:12:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 6,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T20:33:00.000Z",
			"endTime": "2015-04-01T22:07:00.000Z",
			"busType": "Urban",
			"originCode": 32,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T14:25:00.000Z",
			"endTime": "2015-04-01T15:25:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 26,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T19:33:00.000Z",
			"endTime": "2015-04-01T21:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T23:45:00.000Z",
			"endTime": "2015-04-02T01:04:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T16:02:00.000Z",
			"endTime": "2015-04-01T16:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T05:09:00.000Z",
			"endTime": "2015-04-01T05:54:00.000Z",
			"busType": "Urban",
			"originCode": 36,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T17:24:00.000Z",
			"endTime": "2015-04-01T18:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T08:55:00.000Z",
			"endTime": "2015-04-01T09:31:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T08:39:00.000Z",
			"endTime": "2015-04-01T09:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 15,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T14:01:00.000Z",
			"endTime": "2015-04-01T15:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 15,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T05:51:00.000Z",
			"endTime": "2015-04-01T06:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T07:32:00.000Z",
			"endTime": "2015-04-01T08:14:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T16:33:00.000Z",
			"endTime": "2015-04-01T17:58:00.000Z",
			"busType": "Interurban",
			"originCode": 39,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T17:36:00.000Z",
			"endTime": "2015-04-01T18:22:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 44,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T11:10:00.000Z",
			"endTime": "2015-04-01T12:24:00.000Z",
			"busType": "Urban",
			"originCode": 23,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T07:49:00.000Z",
			"endTime": "2015-04-01T09:16:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T15:24:00.000Z",
			"endTime": "2015-04-01T16:00:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T09:57:00.000Z",
			"endTime": "2015-04-01T11:48:00.000Z",
			"busType": "Urban",
			"originCode": 30,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T19:04:00.000Z",
			"endTime": "2015-04-01T19:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T15:35:00.000Z",
			"endTime": "2015-04-01T17:18:00.000Z",
			"busType": "Urban",
			"originCode": 18,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T09:12:00.000Z",
			"endTime": "2015-04-01T11:07:00.000Z",
			"busType": "Interurban",
			"originCode": 46,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T15:35:00.000Z",
			"endTime": "2015-04-01T17:29:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T22:49:00.000Z",
			"endTime": "2015-04-02T00:20:00.000Z",
			"busType": "Urban",
			"originCode": 13,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T14:12:00.000Z",
			"endTime": "2015-04-01T16:00:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T12:34:00.000Z",
			"endTime": "2015-04-01T14:18:00.000Z",
			"busType": "Interurban",
			"originCode": 32,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T18:14:00.000Z",
			"endTime": "2015-04-01T18:47:00.000Z",
			"busType": "Urban",
			"originCode": 41,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T09:43:00.000Z",
			"endTime": "2015-04-01T10:59:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T11:10:00.000Z",
			"endTime": "2015-04-01T12:58:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T16:12:00.000Z",
			"endTime": "2015-04-01T17:03:00.000Z",
			"busType": "Urban",
			"originCode": 50,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T16:43:00.000Z",
			"endTime": "2015-04-01T18:11:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T05:49:00.000Z",
			"endTime": "2015-04-01T07:45:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T20:54:00.000Z",
			"endTime": "2015-04-01T21:53:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T11:46:00.000Z",
			"endTime": "2015-04-01T12:17:00.000Z",
			"busType": "Interurban",
			"originCode": 2,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T15:13:00.000Z",
			"endTime": "2015-04-01T17:01:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 37,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T13:45:00.000Z",
			"endTime": "2015-04-01T15:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T15:17:00.000Z",
			"endTime": "2015-04-01T16:17:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T11:24:00.000Z",
			"endTime": "2015-04-01T11:57:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 37,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T21:16:00.000Z",
			"endTime": "2015-04-01T22:29:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T09:58:00.000Z",
			"endTime": "2015-04-01T10:36:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T08:30:00.000Z",
			"endTime": "2015-04-01T09:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 45,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T22:49:00.000Z",
			"endTime": "2015-04-01T23:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T20:50:00.000Z",
			"endTime": "2015-04-01T21:54:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T13:07:00.000Z",
			"endTime": "2015-04-01T13:42:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 29,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T12:04:00.000Z",
			"endTime": "2015-04-01T14:02:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 13,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T08:13:00.000Z",
			"endTime": "2015-04-01T09:52:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 24,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T08:39:00.000Z",
			"endTime": "2015-04-01T09:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T19:23:00.000Z",
			"endTime": "2015-04-01T21:12:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T08:34:00.000Z",
			"endTime": "2015-04-01T09:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 45,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T13:59:00.000Z",
			"endTime": "2015-04-01T14:53:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T05:15:00.000Z",
			"endTime": "2015-04-01T07:02:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T19:46:00.000Z",
			"endTime": "2015-04-01T20:34:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T07:45:00.000Z",
			"endTime": "2015-04-01T09:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T19:50:00.000Z",
			"endTime": "2015-04-01T20:52:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 23,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T10:58:00.000Z",
			"endTime": "2015-04-01T11:45:00.000Z",
			"busType": "Interurban",
			"originCode": 15,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T15:42:00.000Z",
			"endTime": "2015-04-01T16:23:00.000Z",
			"busType": "Urban",
			"originCode": 17,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T08:18:00.000Z",
			"endTime": "2015-04-01T09:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 7,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T14:46:00.000Z",
			"endTime": "2015-04-01T15:16:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T12:26:00.000Z",
			"endTime": "2015-04-01T13:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T22:01:00.000Z",
			"endTime": "2015-04-01T23:07:00.000Z",
			"busType": "Interurban",
			"originCode": 11,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T16:56:00.000Z",
			"endTime": "2015-04-01T18:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T20:47:00.000Z",
			"endTime": "2015-04-01T22:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T18:15:00.000Z",
			"endTime": "2015-04-01T20:07:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T04:35:00.000Z",
			"endTime": "2015-04-01T05:53:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 37,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T19:54:00.000Z",
			"endTime": "2015-04-01T21:35:00.000Z",
			"busType": "Urban",
			"originCode": 35,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T20:15:00.000Z",
			"endTime": "2015-04-01T20:50:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T17:39:00.000Z",
			"endTime": "2015-04-01T19:13:00.000Z",
			"busType": "Urban",
			"originCode": 34,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T06:23:00.000Z",
			"endTime": "2015-04-01T07:05:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T16:46:00.000Z",
			"endTime": "2015-04-01T17:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T18:19:00.000Z",
			"endTime": "2015-04-01T18:53:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 29,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T04:07:00.000Z",
			"endTime": "2015-04-01T05:33:00.000Z",
			"busType": "Urban",
			"originCode": 43,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T08:03:00.000Z",
			"endTime": "2015-04-01T09:28:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T14:12:00.000Z",
			"endTime": "2015-04-01T16:12:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T16:52:00.000Z",
			"endTime": "2015-04-01T18:44:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T17:27:00.000Z",
			"endTime": "2015-04-01T18:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T10:53:00.000Z",
			"endTime": "2015-04-01T12:43:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T20:54:00.000Z",
			"endTime": "2015-04-01T22:51:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 50,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T17:28:00.000Z",
			"endTime": "2015-04-01T18:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T04:49:00.000Z",
			"endTime": "2015-04-01T05:29:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 19,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T21:26:00.000Z",
			"endTime": "2015-04-01T22:16:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T20:20:00.000Z",
			"endTime": "2015-04-01T22:20:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T05:25:00.000Z",
			"endTime": "2015-04-01T06:10:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T20:44:00.000Z",
			"endTime": "2015-04-01T21:24:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T19:46:00.000Z",
			"endTime": "2015-04-01T21:17:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 37,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T08:14:00.000Z",
			"endTime": "2015-04-01T09:13:00.000Z",
			"busType": "Urban",
			"originCode": 48,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T11:53:00.000Z",
			"endTime": "2015-04-01T12:25:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T14:43:00.000Z",
			"endTime": "2015-04-01T15:22:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 12,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T19:45:00.000Z",
			"endTime": "2015-04-01T21:09:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T16:10:00.000Z",
			"endTime": "2015-04-01T17:55:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T22:02:00.000Z",
			"endTime": "2015-04-01T22:50:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T11:16:00.000Z",
			"endTime": "2015-04-01T12:09:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 21,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T08:54:00.000Z",
			"endTime": "2015-04-01T09:56:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T06:43:00.000Z",
			"endTime": "2015-04-01T07:30:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T17:35:00.000Z",
			"endTime": "2015-04-01T18:21:00.000Z",
			"busType": "Interurban",
			"originCode": 17,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T23:49:00.000Z",
			"endTime": "2015-04-02T01:46:00.000Z",
			"busType": "Urban",
			"originCode": 32,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T14:50:00.000Z",
			"endTime": "2015-04-01T16:06:00.000Z",
			"busType": "Interurban",
			"originCode": 39,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T12:38:00.000Z",
			"endTime": "2015-04-01T14:09:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 6,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T19:13:00.000Z",
			"endTime": "2015-04-01T20:35:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T08:51:00.000Z",
			"endTime": "2015-04-01T10:44:00.000Z",
			"busType": "Interurban",
			"originCode": 36,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T17:18:00.000Z",
			"endTime": "2015-04-01T19:06:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T20:11:00.000Z",
			"endTime": "2015-04-01T21:08:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T07:30:00.000Z",
			"endTime": "2015-04-01T09:00:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 12,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T13:37:00.000Z",
			"endTime": "2015-04-01T14:45:00.000Z",
			"busType": "Urban",
			"originCode": 45,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T09:54:00.000Z",
			"endTime": "2015-04-01T11:21:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T17:23:00.000Z",
			"endTime": "2015-04-01T18:33:00.000Z",
			"busType": "Urban",
			"originCode": 24,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T20:30:00.000Z",
			"endTime": "2015-04-01T21:26:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T21:26:00.000Z",
			"endTime": "2015-04-01T22:03:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T07:06:00.000Z",
			"endTime": "2015-04-01T08:21:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 42,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T12:50:00.000Z",
			"endTime": "2015-04-01T13:30:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T20:10:00.000Z",
			"endTime": "2015-04-01T21:18:00.000Z",
			"busType": "Urban",
			"originCode": 18,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T13:42:00.000Z",
			"endTime": "2015-04-01T14:53:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T07:37:00.000Z",
			"endTime": "2015-04-01T08:32:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T12:21:00.000Z",
			"endTime": "2015-04-01T13:26:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T22:07:00.000Z",
			"endTime": "2015-04-01T23:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T10:20:00.000Z",
			"endTime": "2015-04-01T11:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T09:37:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 39,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:58:00.000Z",
			"endTime": "2015-04-01T19:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 23,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T05:11:00.000Z",
			"endTime": "2015-04-01T05:54:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T14:14:00.000Z",
			"endTime": "2015-04-01T15:56:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T13:43:00.000Z",
			"endTime": "2015-04-01T15:40:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T19:31:00.000Z",
			"endTime": "2015-04-01T20:18:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 23,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T08:51:00.000Z",
			"endTime": "2015-04-01T09:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T20:02:00.000Z",
			"endTime": "2015-04-01T20:54:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T20:03:00.000Z",
			"endTime": "2015-04-01T21:06:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 13,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T18:43:00.000Z",
			"endTime": "2015-04-01T19:37:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T17:42:00.000Z",
			"endTime": "2015-04-01T18:40:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T07:25:00.000Z",
			"endTime": "2015-04-01T08:28:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T18:16:00.000Z",
			"endTime": "2015-04-01T19:52:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T22:34:00.000Z",
			"endTime": "2015-04-02T00:12:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 31,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T08:43:00.000Z",
			"endTime": "2015-04-01T10:35:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T13:03:00.000Z",
			"endTime": "2015-04-01T14:01:00.000Z",
			"busType": "Urban",
			"originCode": 6,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T09:37:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 28,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T08:14:00.000Z",
			"endTime": "2015-04-01T09:28:00.000Z",
			"busType": "Interurban",
			"originCode": 31,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T06:40:00.000Z",
			"endTime": "2015-04-01T07:32:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T17:19:00.000Z",
			"endTime": "2015-04-01T18:34:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T17:35:00.000Z",
			"endTime": "2015-04-01T18:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T06:19:00.000Z",
			"endTime": "2015-04-01T07:58:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T12:50:00.000Z",
			"endTime": "2015-04-01T14:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 39,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T07:37:00.000Z",
			"endTime": "2015-04-01T08:33:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T17:16:00.000Z",
			"endTime": "2015-04-01T19:14:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T08:11:00.000Z",
			"endTime": "2015-04-01T08:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 43,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T08:24:00.000Z",
			"endTime": "2015-04-01T09:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T08:21:00.000Z",
			"endTime": "2015-04-01T08:51:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T16:17:00.000Z",
			"endTime": "2015-04-01T17:33:00.000Z",
			"busType": "Interurban",
			"originCode": 40,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T22:11:00.000Z",
			"endTime": "2015-04-01T23:14:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 31,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T13:12:00.000Z",
			"endTime": "2015-04-01T14:39:00.000Z",
			"busType": "Interurban",
			"originCode": 3,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T12:09:00.000Z",
			"endTime": "2015-04-01T13:34:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T17:27:00.000Z",
			"endTime": "2015-04-01T18:32:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 1,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T18:30:00.000Z",
			"endTime": "2015-04-01T19:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T20:03:00.000Z",
			"endTime": "2015-04-01T21:08:00.000Z",
			"busType": "Interurban",
			"originCode": 19,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T20:15:00.000Z",
			"endTime": "2015-04-01T21:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T19:44:00.000Z",
			"endTime": "2015-04-01T21:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T18:58:00.000Z",
			"endTime": "2015-04-01T20:10:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T18:44:00.000Z",
			"endTime": "2015-04-01T20:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 47,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T15:30:00.000Z",
			"endTime": "2015-04-01T17:17:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T16:24:00.000Z",
			"endTime": "2015-04-01T18:23:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T07:40:00.000Z",
			"endTime": "2015-04-01T08:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T08:50:00.000Z",
			"endTime": "2015-04-01T09:38:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T04:40:00.000Z",
			"endTime": "2015-04-01T06:07:00.000Z",
			"busType": "Urban",
			"originCode": 21,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T08:29:00.000Z",
			"endTime": "2015-04-01T09:29:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 46,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T17:05:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Urban",
			"originCode": 24,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T14:23:00.000Z",
			"endTime": "2015-04-01T16:06:00.000Z",
			"busType": "Urban",
			"originCode": 36,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T17:03:00.000Z",
			"endTime": "2015-04-01T18:37:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T20:11:00.000Z",
			"endTime": "2015-04-01T22:03:00.000Z",
			"busType": "Urban",
			"originCode": 2,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T14:24:00.000Z",
			"endTime": "2015-04-01T15:27:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T08:13:00.000Z",
			"endTime": "2015-04-01T10:01:00.000Z",
			"busType": "Urban",
			"originCode": 49,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T09:59:00.000Z",
			"endTime": "2015-04-01T11:09:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 21,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T14:32:00.000Z",
			"endTime": "2015-04-01T16:00:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 9,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T06:05:00.000Z",
			"endTime": "2015-04-01T08:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T19:40:00.000Z",
			"endTime": "2015-04-01T20:36:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T16:58:00.000Z",
			"endTime": "2015-04-01T18:43:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 8,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T17:51:00.000Z",
			"endTime": "2015-04-01T19:12:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T19:46:00.000Z",
			"endTime": "2015-04-01T21:31:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T09:41:00.000Z",
			"endTime": "2015-04-01T11:26:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 24,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T08:37:00.000Z",
			"endTime": "2015-04-01T09:20:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 39,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T20:37:00.000Z",
			"endTime": "2015-04-01T22:05:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T18:25:00.000Z",
			"endTime": "2015-04-01T19:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T15:07:00.000Z",
			"endTime": "2015-04-01T16:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 21,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T05:59:00.000Z",
			"endTime": "2015-04-01T06:54:00.000Z",
			"busType": "Urban",
			"originCode": 27,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T17:32:00.000Z",
			"endTime": "2015-04-01T19:01:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T18:52:00.000Z",
			"endTime": "2015-04-01T20:04:00.000Z",
			"busType": "Urban",
			"originCode": 11,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T17:26:00.000Z",
			"endTime": "2015-04-01T19:25:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 7,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T15:19:00.000Z",
			"endTime": "2015-04-01T17:12:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T18:43:00.000Z",
			"endTime": "2015-04-01T19:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 33,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T17:26:00.000Z",
			"endTime": "2015-04-01T18:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T09:22:00.000Z",
			"endTime": "2015-04-01T10:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T23:40:00.000Z",
			"endTime": "2015-04-02T01:21:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T04:34:00.000Z",
			"endTime": "2015-04-01T05:18:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T08:19:00.000Z",
			"endTime": "2015-04-01T09:37:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T08:44:00.000Z",
			"endTime": "2015-04-01T09:39:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T15:28:00.000Z",
			"endTime": "2015-04-01T16:34:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T11:25:00.000Z",
			"endTime": "2015-04-01T13:23:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T15:47:00.000Z",
			"endTime": "2015-04-01T16:41:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T06:17:00.000Z",
			"endTime": "2015-04-01T07:24:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T09:42:00.000Z",
			"endTime": "2015-04-01T10:42:00.000Z",
			"busType": "Interurban",
			"originCode": 40,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T22:01:00.000Z",
			"endTime": "2015-04-02T00:01:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T06:29:00.000Z",
			"endTime": "2015-04-01T08:27:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T12:57:00.000Z",
			"endTime": "2015-04-01T13:43:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T11:45:00.000Z",
			"endTime": "2015-04-01T13:39:00.000Z",
			"busType": "Interurban",
			"originCode": 36,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T06:42:00.000Z",
			"endTime": "2015-04-01T08:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T16:56:00.000Z",
			"endTime": "2015-04-01T18:29:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T22:29:00.000Z",
			"endTime": "2015-04-02T00:01:00.000Z",
			"busType": "Urban",
			"originCode": 12,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T07:15:00.000Z",
			"endTime": "2015-04-01T08:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T15:18:00.000Z",
			"endTime": "2015-04-01T16:54:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T11:37:00.000Z",
			"endTime": "2015-04-01T12:17:00.000Z",
			"busType": "Urban",
			"originCode": 33,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T09:21:00.000Z",
			"endTime": "2015-04-01T10:35:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T18:08:00.000Z",
			"endTime": "2015-04-01T18:45:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T09:27:00.000Z",
			"endTime": "2015-04-01T10:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T09:55:00.000Z",
			"endTime": "2015-04-01T11:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T21:34:00.000Z",
			"endTime": "2015-04-01T22:25:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 28,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T10:46:00.000Z",
			"endTime": "2015-04-01T12:28:00.000Z",
			"busType": "Interurban",
			"originCode": 35,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T14:14:00.000Z",
			"endTime": "2015-04-01T15:17:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T17:58:00.000Z",
			"endTime": "2015-04-01T19:52:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T07:40:00.000Z",
			"endTime": "2015-04-01T08:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T10:34:00.000Z",
			"endTime": "2015-04-01T11:33:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 28,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T15:21:00.000Z",
			"endTime": "2015-04-01T16:47:00.000Z",
			"busType": "Urban",
			"originCode": 37,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T06:22:00.000Z",
			"endTime": "2015-04-01T07:46:00.000Z",
			"busType": "Urban",
			"originCode": 49,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T04:30:00.000Z",
			"endTime": "2015-04-01T06:28:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 36,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T17:46:00.000Z",
			"endTime": "2015-04-01T18:25:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 11,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T19:34:00.000Z",
			"endTime": "2015-04-01T20:25:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 29,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T10:49:00.000Z",
			"endTime": "2015-04-01T11:24:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T12:57:00.000Z",
			"endTime": "2015-04-01T14:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 31,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T08:47:00.000Z",
			"endTime": "2015-04-01T10:41:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T20:58:00.000Z",
			"endTime": "2015-04-01T21:43:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T17:56:00.000Z",
			"endTime": "2015-04-01T18:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 19,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T15:09:00.000Z",
			"endTime": "2015-04-01T16:00:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T14:32:00.000Z",
			"endTime": "2015-04-01T15:18:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T09:53:00.000Z",
			"endTime": "2015-04-01T10:31:00.000Z",
			"busType": "Urban",
			"originCode": 35,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T06:20:00.000Z",
			"endTime": "2015-04-01T07:32:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 21,
			"destinationCode": 11
		},
		{
			"startTime": "2015-04-01T12:28:00.000Z",
			"endTime": "2015-04-01T13:08:00.000Z",
			"busType": "Urban",
			"originCode": 45,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T08:52:00.000Z",
			"endTime": "2015-04-01T10:37:00.000Z",
			"busType": "Urban",
			"originCode": 10,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T10:11:00.000Z",
			"endTime": "2015-04-01T11:44:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T15:44:00.000Z",
			"endTime": "2015-04-01T17:15:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T19:10:00.000Z",
			"endTime": "2015-04-01T20:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 16,
			"destinationCode": 9
		},
		{
			"startTime": "2015-04-01T08:18:00.000Z",
			"endTime": "2015-04-01T08:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T16:36:00.000Z",
			"endTime": "2015-04-01T18:07:00.000Z",
			"busType": "Urban",
			"originCode": 46,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T22:44:00.000Z",
			"endTime": "2015-04-02T00:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 15,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T09:59:00.000Z",
			"endTime": "2015-04-01T11:53:00.000Z",
			"busType": "Interurban",
			"originCode": 48,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T20:15:00.000Z",
			"endTime": "2015-04-01T21:58:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T19:21:00.000Z",
			"endTime": "2015-04-01T20:27:00.000Z",
			"busType": "Urban",
			"originCode": 7,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T13:02:00.000Z",
			"endTime": "2015-04-01T13:54:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T07:30:00.000Z",
			"endTime": "2015-04-01T08:24:00.000Z",
			"busType": "Urban",
			"originCode": 18,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T10:06:00.000Z",
			"endTime": "2015-04-01T10:56:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T13:22:00.000Z",
			"endTime": "2015-04-01T14:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 10,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T11:40:00.000Z",
			"endTime": "2015-04-01T12:24:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T06:14:00.000Z",
			"endTime": "2015-04-01T07:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T08:46:00.000Z",
			"endTime": "2015-04-01T09:39:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 5,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T09:47:00.000Z",
			"endTime": "2015-04-01T10:28:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T16:12:00.000Z",
			"endTime": "2015-04-01T17:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T17:19:00.000Z",
			"endTime": "2015-04-01T17:57:00.000Z",
			"busType": "Interurban",
			"originCode": 39,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T18:26:00.000Z",
			"endTime": "2015-04-01T19:03:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T14:42:00.000Z",
			"endTime": "2015-04-01T15:54:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T22:07:00.000Z",
			"endTime": "2015-04-02T00:02:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T06:52:00.000Z",
			"endTime": "2015-04-01T08:48:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T16:05:00.000Z",
			"endTime": "2015-04-01T17:14:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T20:40:00.000Z",
			"endTime": "2015-04-01T22:15:00.000Z",
			"busType": "Interurban",
			"originCode": 47,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T07:37:00.000Z",
			"endTime": "2015-04-01T08:07:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T08:13:00.000Z",
			"endTime": "2015-04-01T09:00:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T06:59:00.000Z",
			"endTime": "2015-04-01T08:52:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T15:57:00.000Z",
			"endTime": "2015-04-01T17:51:00.000Z",
			"busType": "Interurban",
			"originCode": 36,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T11:24:00.000Z",
			"endTime": "2015-04-01T12:01:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 23,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T15:08:00.000Z",
			"endTime": "2015-04-01T16:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 39,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T09:37:00.000Z",
			"endTime": "2015-04-01T10:30:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T18:30:00.000Z",
			"endTime": "2015-04-01T19:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 49,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T11:43:00.000Z",
			"endTime": "2015-04-01T13:11:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T21:36:00.000Z",
			"endTime": "2015-04-01T22:43:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T19:33:00.000Z",
			"endTime": "2015-04-01T21:18:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 3,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T10:25:00.000Z",
			"endTime": "2015-04-01T11:50:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T17:48:00.000Z",
			"endTime": "2015-04-01T19:25:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T09:12:00.000Z",
			"endTime": "2015-04-01T09:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T15:33:00.000Z",
			"endTime": "2015-04-01T16:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 15,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T17:11:00.000Z",
			"endTime": "2015-04-01T18:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 24,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T15:13:00.000Z",
			"endTime": "2015-04-01T15:53:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T16:52:00.000Z",
			"endTime": "2015-04-01T17:40:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T21:13:00.000Z",
			"endTime": "2015-04-01T22:07:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T20:00:00.000Z",
			"endTime": "2015-04-01T20:45:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T15:31:00.000Z",
			"endTime": "2015-04-01T17:23:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T08:20:00.000Z",
			"endTime": "2015-04-01T09:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 27,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T09:24:00.000Z",
			"endTime": "2015-04-01T10:30:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T08:34:00.000Z",
			"endTime": "2015-04-01T09:23:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 32,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T20:00:00.000Z",
			"endTime": "2015-04-01T20:35:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T14:53:00.000Z",
			"endTime": "2015-04-01T16:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 6,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T22:40:00.000Z",
			"endTime": "2015-04-01T23:35:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T04:01:00.000Z",
			"endTime": "2015-04-01T05:09:00.000Z",
			"busType": "Interurban",
			"originCode": 32,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T15:18:00.000Z",
			"endTime": "2015-04-01T17:10:00.000Z",
			"busType": "Urban",
			"originCode": 9,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T19:40:00.000Z",
			"endTime": "2015-04-01T21:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 6,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T06:19:00.000Z",
			"endTime": "2015-04-01T07:46:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T14:03:00.000Z",
			"endTime": "2015-04-01T14:59:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 37,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T17:29:00.000Z",
			"endTime": "2015-04-01T18:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T19:17:00.000Z",
			"endTime": "2015-04-01T20:26:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T18:16:00.000Z",
			"endTime": "2015-04-01T19:54:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T16:30:00.000Z",
			"endTime": "2015-04-01T17:18:00.000Z",
			"busType": "Urban",
			"originCode": 43,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T20:30:00.000Z",
			"endTime": "2015-04-01T22:17:00.000Z",
			"busType": "Interurban",
			"originCode": 19,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T15:42:00.000Z",
			"endTime": "2015-04-01T17:38:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T16:00:00.000Z",
			"endTime": "2015-04-01T17:15:00.000Z",
			"busType": "Interurban",
			"originCode": 14,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T16:05:00.000Z",
			"endTime": "2015-04-01T16:39:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T16:01:00.000Z",
			"endTime": "2015-04-01T16:35:00.000Z",
			"busType": "Interurban",
			"originCode": 4,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T06:09:00.000Z",
			"endTime": "2015-04-01T07:25:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 7,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T17:08:00.000Z",
			"endTime": "2015-04-01T18:25:00.000Z",
			"busType": "Urban",
			"originCode": 3,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T20:07:00.000Z",
			"endTime": "2015-04-01T21:35:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 7,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T17:33:00.000Z",
			"endTime": "2015-04-01T18:54:00.000Z",
			"busType": "Interurban",
			"originCode": 47,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T07:07:00.000Z",
			"endTime": "2015-04-01T07:44:00.000Z",
			"busType": "Interurban",
			"originCode": 42,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T16:17:00.000Z",
			"endTime": "2015-04-01T17:06:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 46,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T13:59:00.000Z",
			"endTime": "2015-04-01T14:33:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 44,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T07:52:00.000Z",
			"endTime": "2015-04-01T08:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 42,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T17:24:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T10:44:00.000Z",
			"endTime": "2015-04-01T12:00:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T07:27:00.000Z",
			"endTime": "2015-04-01T09:14:00.000Z",
			"busType": "Interurban",
			"originCode": 42,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T14:35:00.000Z",
			"endTime": "2015-04-01T16:22:00.000Z",
			"busType": "Urban",
			"originCode": 40,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T18:55:00.000Z",
			"endTime": "2015-04-01T20:28:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T14:19:00.000Z",
			"endTime": "2015-04-01T15:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 44,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T13:28:00.000Z",
			"endTime": "2015-04-01T13:58:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T20:04:00.000Z",
			"endTime": "2015-04-01T20:42:00.000Z",
			"busType": "Interurban",
			"originCode": 50,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T11:57:00.000Z",
			"endTime": "2015-04-01T12:33:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 38,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T07:05:00.000Z",
			"endTime": "2015-04-01T07:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T06:38:00.000Z",
			"endTime": "2015-04-01T08:31:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T04:24:00.000Z",
			"endTime": "2015-04-01T06:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T14:35:00.000Z",
			"endTime": "2015-04-01T15:29:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 16,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T08:07:00.000Z",
			"endTime": "2015-04-01T09:24:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T07:46:00.000Z",
			"endTime": "2015-04-01T08:56:00.000Z",
			"busType": "Interurban",
			"originCode": 41,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T12:44:00.000Z",
			"endTime": "2015-04-01T13:52:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 28,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T19:04:00.000Z",
			"endTime": "2015-04-01T20:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T19:03:00.000Z",
			"endTime": "2015-04-01T21:03:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 41,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T06:05:00.000Z",
			"endTime": "2015-04-01T06:50:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T10:47:00.000Z",
			"endTime": "2015-04-01T11:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T14:53:00.000Z",
			"endTime": "2015-04-01T15:25:00.000Z",
			"busType": "Urban",
			"originCode": 12,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T20:09:00.000Z",
			"endTime": "2015-04-01T22:00:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 17,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T18:32:00.000Z",
			"endTime": "2015-04-01T20:04:00.000Z",
			"busType": "Interurban",
			"originCode": 45,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T14:06:00.000Z",
			"endTime": "2015-04-01T15:39:00.000Z",
			"busType": "Urban",
			"originCode": 38,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T14:08:00.000Z",
			"endTime": "2015-04-01T15:52:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T17:53:00.000Z",
			"endTime": "2015-04-01T19:19:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T06:08:00.000Z",
			"endTime": "2015-04-01T07:38:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 21,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T17:27:00.000Z",
			"endTime": "2015-04-01T19:04:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 16,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T14:09:00.000Z",
			"endTime": "2015-04-01T15:57:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T15:23:00.000Z",
			"endTime": "2015-04-01T15:59:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 22,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T16:31:00.000Z",
			"endTime": "2015-04-01T18:24:00.000Z",
			"busType": "Urban",
			"originCode": 37,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T09:35:00.000Z",
			"endTime": "2015-04-01T11:10:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 20,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T07:30:00.000Z",
			"endTime": "2015-04-01T08:31:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 28,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T10:27:00.000Z",
			"endTime": "2015-04-01T11:05:00.000Z",
			"busType": "Urban",
			"originCode": 10,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T15:58:00.000Z",
			"endTime": "2015-04-01T17:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T20:24:00.000Z",
			"endTime": "2015-04-01T21:31:00.000Z",
			"busType": "Interurban",
			"originCode": 8,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T07:07:00.000Z",
			"endTime": "2015-04-01T09:01:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T17:10:00.000Z",
			"endTime": "2015-04-01T18:29:00.000Z",
			"busType": "Interurban",
			"originCode": 6,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T08:35:00.000Z",
			"endTime": "2015-04-01T10:22:00.000Z",
			"busType": "Urban",
			"originCode": 37,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T21:14:00.000Z",
			"endTime": "2015-04-01T22:12:00.000Z",
			"busType": "Interurban",
			"originCode": 2,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T08:16:00.000Z",
			"endTime": "2015-04-01T09:00:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 50,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T23:03:00.000Z",
			"endTime": "2015-04-02T00:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T16:20:00.000Z",
			"endTime": "2015-04-01T18:02:00.000Z",
			"busType": "Urban",
			"originCode": 39,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T10:16:00.000Z",
			"endTime": "2015-04-01T12:04:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T20:15:00.000Z",
			"endTime": "2015-04-01T22:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 34,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T05:40:00.000Z",
			"endTime": "2015-04-01T06:31:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T17:25:00.000Z",
			"endTime": "2015-04-01T19:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T06:35:00.000Z",
			"endTime": "2015-04-01T07:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T15:08:00.000Z",
			"endTime": "2015-04-01T16:48:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T20:19:00.000Z",
			"endTime": "2015-04-01T22:02:00.000Z",
			"busType": "Urban",
			"originCode": 22,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T19:04:00.000Z",
			"endTime": "2015-04-01T20:32:00.000Z",
			"busType": "Urban",
			"originCode": 10,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T20:10:00.000Z",
			"endTime": "2015-04-01T22:03:00.000Z",
			"busType": "Urban",
			"originCode": 45,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T08:08:00.000Z",
			"endTime": "2015-04-01T09:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T10:27:00.000Z",
			"endTime": "2015-04-01T11:27:00.000Z",
			"busType": "Interurban",
			"originCode": 40,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T14:32:00.000Z",
			"endTime": "2015-04-01T15:45:00.000Z",
			"busType": "Urban",
			"originCode": 33,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T14:32:00.000Z",
			"endTime": "2015-04-01T15:05:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 27,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T14:12:00.000Z",
			"endTime": "2015-04-01T15:33:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T07:31:00.000Z",
			"endTime": "2015-04-01T08:23:00.000Z",
			"busType": "Interurban",
			"originCode": 19,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T13:45:00.000Z",
			"endTime": "2015-04-01T15:36:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 7,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T16:10:00.000Z",
			"endTime": "2015-04-01T16:54:00.000Z",
			"busType": "Interurban",
			"originCode": 34,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T23:12:00.000Z",
			"endTime": "2015-04-02T00:57:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 49,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T18:41:00.000Z",
			"endTime": "2015-04-01T19:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 47,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T05:23:00.000Z",
			"endTime": "2015-04-01T07:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T20:48:00.000Z",
			"endTime": "2015-04-01T21:58:00.000Z",
			"busType": "Interurban",
			"originCode": 33,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T09:42:00.000Z",
			"endTime": "2015-04-01T10:29:00.000Z",
			"busType": "Interurban",
			"originCode": 42,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T13:37:00.000Z",
			"endTime": "2015-04-01T15:02:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 27,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T09:59:00.000Z",
			"endTime": "2015-04-01T11:47:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 35,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T18:15:00.000Z",
			"endTime": "2015-04-01T19:31:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 1,
			"destinationCode": 26
		},
		{
			"startTime": "2015-04-01T22:03:00.000Z",
			"endTime": "2015-04-01T23:19:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T07:40:00.000Z",
			"endTime": "2015-04-01T08:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 19,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T13:17:00.000Z",
			"endTime": "2015-04-01T14:22:00.000Z",
			"busType": "Interurban",
			"originCode": 5,
			"destinationCode": 30
		},
		{
			"startTime": "2015-04-01T19:16:00.000Z",
			"endTime": "2015-04-01T20:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T18:26:00.000Z",
			"endTime": "2015-04-01T19:06:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T10:45:00.000Z",
			"endTime": "2015-04-01T11:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 21,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T04:26:00.000Z",
			"endTime": "2015-04-01T05:05:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 47,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T14:07:00.000Z",
			"endTime": "2015-04-01T15:58:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T12:38:00.000Z",
			"endTime": "2015-04-01T13:38:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T16:12:00.000Z",
			"endTime": "2015-04-01T16:42:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 5,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T12:09:00.000Z",
			"endTime": "2015-04-01T13:13:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 7,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T16:58:00.000Z",
			"endTime": "2015-04-01T17:28:00.000Z",
			"busType": "Urban",
			"originCode": 47,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T14:20:00.000Z",
			"endTime": "2015-04-01T16:18:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T09:02:00.000Z",
			"endTime": "2015-04-01T10:54:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 36,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T18:20:00.000Z",
			"endTime": "2015-04-01T19:32:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 9,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T06:46:00.000Z",
			"endTime": "2015-04-01T08:43:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 10
		},
		{
			"startTime": "2015-04-01T11:00:00.000Z",
			"endTime": "2015-04-01T11:41:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 2,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T11:57:00.000Z",
			"endTime": "2015-04-01T12:58:00.000Z",
			"busType": "Urban",
			"originCode": 42,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T17:29:00.000Z",
			"endTime": "2015-04-01T18:19:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 49,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T08:26:00.000Z",
			"endTime": "2015-04-01T09:52:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 3,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T19:23:00.000Z",
			"endTime": "2015-04-01T21:03:00.000Z",
			"busType": "Urban",
			"originCode": 1,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T16:01:00.000Z",
			"endTime": "2015-04-01T17:31:00.000Z",
			"busType": "Interurban",
			"originCode": 13,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T06:11:00.000Z",
			"endTime": "2015-04-01T06:50:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 22,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T08:59:00.000Z",
			"endTime": "2015-04-01T09:35:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T12:07:00.000Z",
			"endTime": "2015-04-01T13:00:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 21,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T08:19:00.000Z",
			"endTime": "2015-04-01T09:08:00.000Z",
			"busType": "Interurban",
			"originCode": 9,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T12:53:00.000Z",
			"endTime": "2015-04-01T14:21:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T20:59:00.000Z",
			"endTime": "2015-04-01T22:23:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 2,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T09:25:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 24,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T10:20:00.000Z",
			"endTime": "2015-04-01T11:33:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 21,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T08:39:00.000Z",
			"endTime": "2015-04-01T10:21:00.000Z",
			"busType": "Interurban",
			"originCode": 12,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T16:53:00.000Z",
			"endTime": "2015-04-01T18:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T09:12:00.000Z",
			"endTime": "2015-04-01T09:57:00.000Z",
			"busType": "Interurban",
			"originCode": 25,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T12:43:00.000Z",
			"endTime": "2015-04-01T14:05:00.000Z",
			"busType": "Interurban",
			"originCode": 19,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T18:31:00.000Z",
			"endTime": "2015-04-01T19:16:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T06:22:00.000Z",
			"endTime": "2015-04-01T07:38:00.000Z",
			"busType": "Interurban",
			"originCode": 8,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T07:22:00.000Z",
			"endTime": "2015-04-01T08:50:00.000Z",
			"busType": "Interurban",
			"originCode": 10,
			"destinationCode": 21
		},
		{
			"startTime": "2015-04-01T19:41:00.000Z",
			"endTime": "2015-04-01T21:19:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 33,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T09:47:00.000Z",
			"endTime": "2015-04-01T11:20:00.000Z",
			"busType": "Urban",
			"originCode": 10,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T18:21:00.000Z",
			"endTime": "2015-04-01T20:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 7,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T17:40:00.000Z",
			"endTime": "2015-04-01T18:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 31,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T11:52:00.000Z",
			"endTime": "2015-04-01T12:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 20,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T09:16:00.000Z",
			"endTime": "2015-04-01T10:32:00.000Z",
			"busType": "Interurban",
			"originCode": 1,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T18:54:00.000Z",
			"endTime": "2015-04-01T20:23:00.000Z",
			"busType": "Interurban",
			"originCode": 47,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T07:39:00.000Z",
			"endTime": "2015-04-01T09:07:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 36,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T18:55:00.000Z",
			"endTime": "2015-04-01T20:23:00.000Z",
			"busType": "Urban",
			"originCode": 19,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T11:16:00.000Z",
			"endTime": "2015-04-01T13:09:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 41,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T17:17:00.000Z",
			"endTime": "2015-04-01T19:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 9,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T15:04:00.000Z",
			"endTime": "2015-04-01T16:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 27,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T14:51:00.000Z",
			"endTime": "2015-04-01T16:35:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 12,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T11:41:00.000Z",
			"endTime": "2015-04-01T13:08:00.000Z",
			"busType": "Interurban",
			"originCode": 21,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T07:47:00.000Z",
			"endTime": "2015-04-01T09:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 18,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T08:48:00.000Z",
			"endTime": "2015-04-01T09:23:00.000Z",
			"busType": "Interurban",
			"originCode": 16,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T20:04:00.000Z",
			"endTime": "2015-04-01T21:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 20,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T09:58:00.000Z",
			"endTime": "2015-04-01T10:59:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 2,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T20:00:00.000Z",
			"endTime": "2015-04-01T21:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 11,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T13:19:00.000Z",
			"endTime": "2015-04-01T14:37:00.000Z",
			"busType": "Urban",
			"originCode": 50,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T16:28:00.000Z",
			"endTime": "2015-04-01T17:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T15:06:00.000Z",
			"endTime": "2015-04-01T16:19:00.000Z",
			"busType": "Interurban",
			"originCode": 22,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T17:23:00.000Z",
			"endTime": "2015-04-01T19:11:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T12:00:00.000Z",
			"endTime": "2015-04-01T13:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 35,
			"destinationCode": 39
		},
		{
			"startTime": "2015-04-01T15:13:00.000Z",
			"endTime": "2015-04-01T16:07:00.000Z",
			"busType": "Urban",
			"originCode": 15,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T08:55:00.000Z",
			"endTime": "2015-04-01T10:03:00.000Z",
			"busType": "Urban",
			"originCode": 41,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:45:00.000Z",
			"endTime": "2015-04-01T18:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 5
		},
		{
			"startTime": "2015-04-01T12:44:00.000Z",
			"endTime": "2015-04-01T13:57:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 17,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T13:28:00.000Z",
			"endTime": "2015-04-01T14:45:00.000Z",
			"busType": "Urban",
			"originCode": 37,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T14:03:00.000Z",
			"endTime": "2015-04-01T14:35:00.000Z",
			"busType": "Urban",
			"originCode": 8,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T05:29:00.000Z",
			"endTime": "2015-04-01T06:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T12:07:00.000Z",
			"endTime": "2015-04-01T13:19:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 9,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T15:23:00.000Z",
			"endTime": "2015-04-01T17:23:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T23:16:00.000Z",
			"endTime": "2015-04-02T00:03:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 15,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T15:34:00.000Z",
			"endTime": "2015-04-01T17:21:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T19:43:00.000Z",
			"endTime": "2015-04-01T20:56:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 45
		},
		{
			"startTime": "2015-04-01T18:20:00.000Z",
			"endTime": "2015-04-01T19:45:00.000Z",
			"busType": "Urban",
			"originCode": 26,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T15:48:00.000Z",
			"endTime": "2015-04-01T17:38:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 14,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T22:36:00.000Z",
			"endTime": "2015-04-01T23:20:00.000Z",
			"busType": "Urban",
			"originCode": 12,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T20:04:00.000Z",
			"endTime": "2015-04-01T20:43:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T09:42:00.000Z",
			"endTime": "2015-04-01T11:08:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 38,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T18:31:00.000Z",
			"endTime": "2015-04-01T19:19:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T19:37:00.000Z",
			"endTime": "2015-04-01T20:40:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T10:47:00.000Z",
			"endTime": "2015-04-01T12:42:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T10:09:00.000Z",
			"endTime": "2015-04-01T10:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 1,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T06:09:00.000Z",
			"endTime": "2015-04-01T07:44:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 46
		},
		{
			"startTime": "2015-04-01T20:52:00.000Z",
			"endTime": "2015-04-01T22:30:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 29,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T15:33:00.000Z",
			"endTime": "2015-04-01T17:29:00.000Z",
			"busType": "Interurban",
			"originCode": 48,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T10:58:00.000Z",
			"endTime": "2015-04-01T12:05:00.000Z",
			"busType": "Urban",
			"originCode": 36,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T12:58:00.000Z",
			"endTime": "2015-04-01T13:59:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 9,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T14:49:00.000Z",
			"endTime": "2015-04-01T15:41:00.000Z",
			"busType": "Interurban",
			"originCode": 35,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T14:47:00.000Z",
			"endTime": "2015-04-01T16:06:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 4,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T12:33:00.000Z",
			"endTime": "2015-04-01T13:24:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 27,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T07:16:00.000Z",
			"endTime": "2015-04-01T09:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 17,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T08:43:00.000Z",
			"endTime": "2015-04-01T09:35:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T13:38:00.000Z",
			"endTime": "2015-04-01T14:50:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 37,
			"destinationCode": 4
		},
		{
			"startTime": "2015-04-01T08:30:00.000Z",
			"endTime": "2015-04-01T09:48:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T13:19:00.000Z",
			"endTime": "2015-04-01T14:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 24,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T21:10:00.000Z",
			"endTime": "2015-04-01T22:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 43
		},
		{
			"startTime": "2015-04-01T20:44:00.000Z",
			"endTime": "2015-04-01T21:24:00.000Z",
			"busType": "Urban",
			"originCode": 6,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T22:00:00.000Z",
			"endTime": "2015-04-01T22:40:00.000Z",
			"busType": "Urban",
			"originCode": 5,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T13:55:00.000Z",
			"endTime": "2015-04-01T15:22:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T19:05:00.000Z",
			"endTime": "2015-04-01T19:51:00.000Z",
			"busType": "Interurban",
			"originCode": 18,
			"destinationCode": 47
		},
		{
			"startTime": "2015-04-01T17:16:00.000Z",
			"endTime": "2015-04-01T18:29:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 28
		},
		{
			"startTime": "2015-04-01T16:34:00.000Z",
			"endTime": "2015-04-01T17:55:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 40,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T13:01:00.000Z",
			"endTime": "2015-04-01T14:36:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 34,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T20:59:00.000Z",
			"endTime": "2015-04-01T22:06:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 29,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T08:53:00.000Z",
			"endTime": "2015-04-01T09:37:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 40,
			"destinationCode": 42
		},
		{
			"startTime": "2015-04-01T17:28:00.000Z",
			"endTime": "2015-04-01T18:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 19,
			"destinationCode": 37
		},
		{
			"startTime": "2015-04-01T05:49:00.000Z",
			"endTime": "2015-04-01T07:28:00.000Z",
			"busType": "Interurban",
			"originCode": 9,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T06:02:00.000Z",
			"endTime": "2015-04-01T07:49:00.000Z",
			"busType": "Urban",
			"originCode": 24,
			"destinationCode": 38
		},
		{
			"startTime": "2015-04-01T15:11:00.000Z",
			"endTime": "2015-04-01T16:38:00.000Z",
			"busType": "Interurban",
			"originCode": 44,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T09:19:00.000Z",
			"endTime": "2015-04-01T09:58:00.000Z",
			"busType": "Interurban",
			"originCode": 39,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T21:06:00.000Z",
			"endTime": "2015-04-01T21:50:00.000Z",
			"busType": "Interurban",
			"originCode": 15,
			"destinationCode": 33
		},
		{
			"startTime": "2015-04-01T10:14:00.000Z",
			"endTime": "2015-04-01T11:24:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 18,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T16:38:00.000Z",
			"endTime": "2015-04-01T17:15:00.000Z",
			"busType": "Urban",
			"originCode": 44,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T05:13:00.000Z",
			"endTime": "2015-04-01T06:27:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 11,
			"destinationCode": 1
		},
		{
			"startTime": "2015-04-01T08:42:00.000Z",
			"endTime": "2015-04-01T10:14:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 23,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T10:47:00.000Z",
			"endTime": "2015-04-01T12:03:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 14,
			"destinationCode": 8
		},
		{
			"startTime": "2015-04-01T13:55:00.000Z",
			"endTime": "2015-04-01T15:29:00.000Z",
			"busType": "Urban",
			"originCode": 50,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T17:45:00.000Z",
			"endTime": "2015-04-01T18:39:00.000Z",
			"busType": "Interurban",
			"originCode": 37,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T08:19:00.000Z",
			"endTime": "2015-04-01T10:00:00.000Z",
			"busType": "Urban",
			"originCode": 16,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T08:45:00.000Z",
			"endTime": "2015-04-01T10:33:00.000Z",
			"busType": "Urban",
			"originCode": 25,
			"destinationCode": 35
		},
		{
			"startTime": "2015-04-01T17:39:00.000Z",
			"endTime": "2015-04-01T18:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 48,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T14:00:00.000Z",
			"endTime": "2015-04-01T15:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 29,
			"destinationCode": 19
		},
		{
			"startTime": "2015-04-01T18:30:00.000Z",
			"endTime": "2015-04-01T19:07:00.000Z",
			"busType": "Interurban",
			"originCode": 1,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T16:42:00.000Z",
			"endTime": "2015-04-01T17:26:00.000Z",
			"busType": "Interurban",
			"originCode": 27,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T17:18:00.000Z",
			"endTime": "2015-04-01T18:11:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 13,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T16:55:00.000Z",
			"endTime": "2015-04-01T17:49:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 43,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T07:33:00.000Z",
			"endTime": "2015-04-01T08:20:00.000Z",
			"busType": "Interurban",
			"originCode": 49,
			"destinationCode": 17
		},
		{
			"startTime": "2015-04-01T07:31:00.000Z",
			"endTime": "2015-04-01T09:11:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T17:46:00.000Z",
			"endTime": "2015-04-01T19:05:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 36,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T15:49:00.000Z",
			"endTime": "2015-04-01T16:53:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 50,
			"destinationCode": 27
		},
		{
			"startTime": "2015-04-01T11:59:00.000Z",
			"endTime": "2015-04-01T12:31:00.000Z",
			"busType": "Urban",
			"originCode": 38,
			"destinationCode": 32
		},
		{
			"startTime": "2015-04-01T09:53:00.000Z",
			"endTime": "2015-04-01T10:30:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 8,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T06:38:00.000Z",
			"endTime": "2015-04-01T08:22:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 40
		},
		{
			"startTime": "2015-04-01T20:10:00.000Z",
			"endTime": "2015-04-01T21:58:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 42,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T17:21:00.000Z",
			"endTime": "2015-04-01T18:01:00.000Z",
			"busType": "Urban",
			"originCode": 31,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T13:51:00.000Z",
			"endTime": "2015-04-01T15:28:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 1,
			"destinationCode": 15
		},
		{
			"startTime": "2015-04-01T08:26:00.000Z",
			"endTime": "2015-04-01T09:19:00.000Z",
			"busType": "Interurban",
			"originCode": 11,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T14:11:00.000Z",
			"endTime": "2015-04-01T15:15:00.000Z",
			"busType": "Urban",
			"originCode": 50,
			"destinationCode": 34
		},
		{
			"startTime": "2015-04-01T11:36:00.000Z",
			"endTime": "2015-04-01T12:29:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 18
		},
		{
			"startTime": "2015-04-01T20:38:00.000Z",
			"endTime": "2015-04-01T21:29:00.000Z",
			"busType": "Interurban",
			"originCode": 7,
			"destinationCode": 49
		},
		{
			"startTime": "2015-04-01T17:21:00.000Z",
			"endTime": "2015-04-01T18:55:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 42,
			"destinationCode": 25
		},
		{
			"startTime": "2015-04-01T06:07:00.000Z",
			"endTime": "2015-04-01T07:43:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 3,
			"destinationCode": 12
		},
		{
			"startTime": "2015-04-01T18:57:00.000Z",
			"endTime": "2015-04-01T19:27:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 25,
			"destinationCode": 29
		},
		{
			"startTime": "2015-04-01T14:22:00.000Z",
			"endTime": "2015-04-01T15:07:00.000Z",
			"busType": "Interurban",
			"originCode": 23,
			"destinationCode": 6
		},
		{
			"startTime": "2015-04-01T21:25:00.000Z",
			"endTime": "2015-04-01T22:06:00.000Z",
			"busType": "Interurban",
			"originCode": 20,
			"destinationCode": 31
		},
		{
			"startTime": "2015-04-01T15:41:00.000Z",
			"endTime": "2015-04-01T16:48:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T19:36:00.000Z",
			"endTime": "2015-04-01T21:13:00.000Z",
			"busType": "Urban",
			"originCode": 4,
			"destinationCode": 44
		},
		{
			"startTime": "2015-04-01T10:52:00.000Z",
			"endTime": "2015-04-01T12:37:00.000Z",
			"busType": "Interurban",
			"originCode": 38,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T06:59:00.000Z",
			"endTime": "2015-04-01T08:45:00.000Z",
			"busType": "Urban",
			"originCode": 14,
			"destinationCode": 41
		},
		{
			"startTime": "2015-04-01T08:46:00.000Z",
			"endTime": "2015-04-01T10:38:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 3,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T15:35:00.000Z",
			"endTime": "2015-04-01T16:34:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 30,
			"destinationCode": 7
		},
		{
			"startTime": "2015-04-01T07:58:00.000Z",
			"endTime": "2015-04-01T09:17:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 6,
			"destinationCode": 36
		},
		{
			"startTime": "2015-04-01T13:53:00.000Z",
			"endTime": "2015-04-01T14:44:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 32,
			"destinationCode": 48
		},
		{
			"startTime": "2015-04-01T11:37:00.000Z",
			"endTime": "2015-04-01T12:44:00.000Z",
			"busType": "Interurban",
			"originCode": 26,
			"destinationCode": 23
		},
		{
			"startTime": "2015-04-01T07:16:00.000Z",
			"endTime": "2015-04-01T08:42:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 37,
			"destinationCode": 3
		},
		{
			"startTime": "2015-04-01T15:58:00.000Z",
			"endTime": "2015-04-01T17:19:00.000Z",
			"busType": "Urban",
			"originCode": 18,
			"destinationCode": 20
		},
		{
			"startTime": "2015-04-01T15:25:00.000Z",
			"endTime": "2015-04-01T15:56:00.000Z",
			"busType": "Interurban Minibus",
			"originCode": 35,
			"destinationCode": 24
		},
		{
			"startTime": "2015-04-01T19:43:00.000Z",
			"endTime": "2015-04-01T21:16:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 4,
			"destinationCode": 16
		},
		{
			"startTime": "2015-04-01T10:08:00.000Z",
			"endTime": "2015-04-01T11:49:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 36,
			"destinationCode": 22
		},
		{
			"startTime": "2015-04-01T08:17:00.000Z",
			"endTime": "2015-04-01T09:26:00.000Z",
			"busType": "Interurban",
			"originCode": 24,
			"destinationCode": 14
		},
		{
			"startTime": "2015-04-01T19:23:00.000Z",
			"endTime": "2015-04-01T20:10:00.000Z",
			"busType": "Urban",
			"originCode": 17,
			"destinationCode": 2
		},
		{
			"startTime": "2015-04-01T18:34:00.000Z",
			"endTime": "2015-04-01T19:24:00.000Z",
			"busType": "Interurban",
			"originCode": 30,
			"destinationCode": 50
		},
		{
			"startTime": "2015-04-01T19:42:00.000Z",
			"endTime": "2015-04-01T20:47:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 46,
			"destinationCode": 13
		},
		{
			"startTime": "2015-04-01T15:59:00.000Z",
			"endTime": "2015-04-01T17:09:00.000Z",
			"busType": "Urban Minibus",
			"originCode": 48,
			"destinationCode": 36
		}
	];

	return me;
})();
