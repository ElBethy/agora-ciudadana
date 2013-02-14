(function() {
    var Agora = this.Agora,
        app = this.app;

    Agora.ElectionView = Backbone.View.extend({
        el: "div.agora",

        initialize: function() {
            _.bindAll(this);
            //this.calendarView = new Agora.CalendarWidgetView();
            console.log("inittt");

            // Only initialize on correct section of page exists.
            if (this.$("#activity-list").length > 0) {
                console.log("inittt2");
                this.activityListView = new Agora.ActivityListView();
            }
        }
    });
}).call(this)
