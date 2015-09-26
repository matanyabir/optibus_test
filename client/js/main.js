$(document).ready(function ()
{
	var model = new SchedulingModel({});
	var panelView = new PanelView({model: model});
	var graphView = new GraphView({model: model});
	$('#panel_container').html(panelView.render().$el);
	$('#graph_container').html(graphView.render().$el);
	model.loadData();

});