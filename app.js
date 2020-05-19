new Vue({
    el: '#app-covid-19',
    data () {
      return {
        covid_today: null,
        Confirmed:"",
        Recovered:"",
        Hospitalized:"",
        Deaths:"",
        NewConfirmed:"",
        NewRecovered:"",
        NewHospitalized:"",
        NewDeaths:"",
        UpdateDate:"",
        error: false
      }
    },
    mounted: function(){
        this.getData();
    },
    methods: {
        getData: function() {
            var api = "https://covid19.th-stat.com/api/open/today";
            var self = this;
            axios
              .get(api)
              .then(function(response) {
                var channel = response.data;
                if (channel) {
                  self.Confirmed = channel.Confirmed;
                  self.Recovered = channel.Recovered
                  self.Hospitalized = channel.Hospitalized;
                  self.Deaths = channel.Deaths;
                  self.NewConfirmed = channel.NewConfirmed;
                  self.NewRecovered = channel.NewRecovered;
                  self.NewHospitalized = channel.NewHospitalized;
                  self.NewDeaths = channel.NewDeaths;
                } else {
                  self.error = true;
                }
              })
              .catch(function(error) {
                self.error = true;
              });
          }
    },
  })