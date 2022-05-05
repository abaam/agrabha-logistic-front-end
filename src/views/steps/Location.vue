<template>
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6" id="location_form">
    <div class="mb-4 flex items-center gap-2">
      <LocationMarkerIcon class="h-8 w-8 text-blue-light" />
      <h6 class="text-sm font-semibold uppercase">Location</h6>
    </div>
    <div class="mb-4 flex items-center gap-2 h-96" id="map"></div>
    <div class="relative mb-4">
      <Field
        :rules="isRequired"
        type="text"
        as="input"
        id="origin-input"
        name="pick_up"
        placeholder="Pick Up"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="pick-up"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Pick Up</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="pick_up"
      />
    </div>
    <div class="relative mb-4">
      <Field
        :rules="isRequired"
        type="text"
        as="input"
        id="destination-input"
        name="drop_off"
        placeholder="Drop Off"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="drop-off"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Drop Off</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="drop_off"
      />
    </div>
    <div class="relative">
      <Field
        :rules="isRequired"
        type="datetime-local"
        as="input"
        id="date-time"
        name="date_time"
        placeholder="Date/Time"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="date-time"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Date/Time</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="date_time"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { Field, ErrorMessage } from "vee-validate";
import { LocationMarkerIcon } from "@heroicons/vue/outline";
import { loadScript } from "vue-plugin-load-script";

function setupPlaceChangedListener(autocomplete, mode) {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:12.8819585, lng: 121.76654050000002},
    scrollwheel: false,
    zoom: 4
  })
  autocomplete.bindTo("bounds", map);
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();

    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }

    if (mode === "ORIG") {
      var originPlaceId = place.place_id;
    } else {
      var destinationPlaceId = place.place_id;
    }

    if (!originPlaceId || !destinationPlaceId) {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsService.route(
      {
        origin: { placeId: originPlaceId },
        destination: { placeId: destinationPlaceId },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
          console.log(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  });
}

export default {
  setup() {
    return {};
  },
  components: {
    LocationMarkerIcon,
    Field,
    ErrorMessage
  },
  mounted: function() {
    loadScript("https://polyfill.io/v3/polyfill.min.js?features=default")
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDvyM1P3tN2XIcXX0u6BMz2NHwlwQuYz4A&libraries=places")
    .then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat:12.8819585, lng: 121.76654050000002},
        scrollwheel: false,
        zoom: 4
      })

      const originInput = document.getElementById("origin-input");
      const destinationInput = document.getElementById("destination-input");

      // Specify just the place data fields that you need.
      const originAutocomplete = new google.maps.places.Autocomplete(
        originInput,
        { fields: ["place_id"],
          componentRestrictions: {country: "ph"} 
        }
      );
      // Specify just the place data fields that you need.
      const destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput,
        { fields: ["place_id"],
          componentRestrictions: {country: "ph"} 
        }
      );

      setupPlaceChangedListener(originAutocomplete, "ORIG");
      setupPlaceChangedListener(destinationAutocomplete, "DEST");
    })
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) {
        var location_form = [];
        $('#location_form input').each(function(){location_form.push(this.value);});
        
        if(!location_form.some(function(e){return (!e || 0 === e.length);})){
          localStorage['location_form'] = JSON.stringify(location_form);
          localStorage.setItem('validate_form', true);
        }
        
        return true;
      } else {
        localStorage.setItem('validate_form', false);
        return 'This is required';
      }
    },
  }
};
</script>
