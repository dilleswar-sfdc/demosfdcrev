({
	scriptLoaded : function(component, event, helper) {
        helper.playbook = $(".playbook-container");
        helper.divspinner = $(helper.playbook).find(".divspinner");
        helper.body = $(helper.playbook).find(".iplaybookv1body");
		helper.bindDocument(component,event,helper);
	},
    leftnav : function(component,event,helper)
    {
     	var e = event.currentTarget;
     	var classname= $(e).attr('class');
        component.set("v.istab",true);
        component.set("v.page","0");
        helper.setCurrentNav(component,event,helper,classname);
    },
    send:function(component,event,helper)
    {
      helper.send(component,event,helper);
    },
    preview:function(component,event,helper)
    {
        helper.preview(component,event,helper);
    },
    refresh: function(component,event,helper)
    {
        var classname = $(helper.playbook).find(".activenav").find(".leftnavcolor").attr("class");
        helper.setCurrentNav(component,event,helper,classname);
    },
    clear: function(component, event, helper)
    {
        var e = event.currentTarget;
        $(".search").show();
        $(e).hide();
        component.find("searchfilter").set("v.value","");
        component.set("v.searchtext","");
        var classname = $(helper.playbook).find(".activenav").find(".leftnavcolor").attr("class");
        helper.setCurrentNav(component,event,helper,classname);
    },
    search:function(component,event,helper)
    {
        helper.search(component,event,helper);
    },
    keyCheck : function(component, event, helper){
        if (event.which == 13){
            helper.search(component,event,helper);
        }
    },
})