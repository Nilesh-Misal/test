//this will hold currently focused tab
var currentTab;
//initilize tabs
$(function () {	
	//when ever any tab is clicked this method will be call
	$("#myTab").on("click", "a", function(e){
		e.preventDefault();		
		$(this).tab('show');
		$currentTab = $(this);
	});
});

$(function() {
    $.contextMenu({
        selector: 'ul[data-asid=tab-layout] li', 
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "close": {name: "Close"},
            "close_other": {name: "Close Other Tabs"},
           	"close_right": {name: "Close Tabs to the Right"},
            "sep1": "---------",
            "new": {
            	name: "New <span style='float: right;'>Ctrl+N</span>",
        		isHtmlName: true,
		        callback: function(itemKey, opt, e){
		            createNewProject();
		        }
        	}
        }
    });   
});