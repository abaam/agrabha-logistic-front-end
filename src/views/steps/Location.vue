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
      <Field
        :rules="isRequired"
        type="hidden"
        as="input"
        id="origin-input-lat"
        name="pick_up_lat"
        placeholder="Pick Up Latitude"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <Field
        :rules="isRequired"
        type="hidden"
        as="input"
        id="origin-input-lng"
        name="pick_up_lng"
        placeholder="Pick Up Longitude"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="origin-input"
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
        id="origin-complete-address"
        name="pick_up_complete_address"
        placeholder="Complete Address"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="origin-complete-address"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Complete Address</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="pick_up_complete_address"
      />
    </div>
    <hr class="mb-4">
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
      <Field
        :rules="isRequired"
        type="hidden"
        as="input"
        id="destination-input-lat"
        name="drop_off_lat"
        placeholder="Drop Off Latitude"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <Field
        :rules="isRequired"
        type="hidden"
        as="input"
        id="destination-input-lng"
        name="drop_off_lng"
        placeholder="Drop Off Longitude"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="destination-input"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Drop Off</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="drop_off"
      />
    </div>
    <div class="relative mb-4">
      <Field
        :rules="isRequired"
        type="text"
        as="input"
        id="destination-complete-address"
        name="drop_off_complete_address"
        placeholder="Complete Address"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <label
        for="destination-complete-address"
        class="absolute -top-2.5 left-3 z-10 bg-white text-sm font-semibold transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-grey peer-focus:-top-2.5 peer-focus:left-3 peer-focus:bg-white peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-800"
        >Complete Address</label
      >
      <ErrorMessage
        class="my-1 block text-sm font-semibold text-purple"
        name="drop_off_complete_address"
      />
    </div>
    <hr class="mb-4">
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
        >Date/Time of Pickup</label
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
  localStorage.removeItem('originPlaceId');
  localStorage.removeItem('originLat');
  localStorage.removeItem('originLng');
  localStorage.removeItem('destinationPlaceId');
  localStorage.removeItem('destinationLat');
  localStorage.removeItem('destinationLng');

  const map = new google.maps.Map(document.getElementById("map"), {
    center: {lat:12.8819585, lng: 121.76654050000002},
    scrollwheel: false,
    zoom: 4
  })
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  directionsRenderer.setMap(map);

  autocomplete.bindTo("bounds", map);
  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();

    if (!place.place_id) {
      alert("Please select an option from the dropdown list.");
      return;
    }

    if (mode === "ORIG") {
      localStorage.setItem('originPlaceId', place.place_id);
      localStorage.setItem('originLat', place.geometry.location.lat());
      localStorage.setItem('originLng', place.geometry.location.lng());
    } else {
      localStorage.setItem('destinationPlaceId', place.place_id);
      localStorage.setItem('destinationLat', place.geometry.location.lat());
      localStorage.setItem('destinationLng', place.geometry.location.lng());
    }

    var geocoder = new google.maps.Geocoder();
    var origin_input = document.getElementById("origin-input").value;
    var destination_input = document.getElementById("destination-input").value;
    geocoder.geocode( { 'address': origin_input}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {
          $('#origin-input-lat').val(results[0].geometry.location.lat());
          $('#origin-input-lng').val(results[0].geometry.location.lng());
      }
    });
    geocoder.geocode( { 'address': destination_input}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {
          $('#destination-input-lat').val(results[0].geometry.location.lat());
          $('#destination-input-lng').val(results[0].geometry.location.lng());
      }
    });

    directionsService.route(
      {
        origin: { placeId: localStorage.getItem('originPlaceId') },
        destination: { placeId: localStorage.getItem('destinationPlaceId') },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          alert("Directions request failed due to " + status);
        }
      }
    );

    originMarker.setPosition(new google.maps.LatLng(localStorage.getItem('originLat'), localStorage.getItem('originLng')));
    originMarker.setMap(map);
    originMarker.setAnimation(google.maps.Animation.DROP);
    originMarker.setIcon('/img/pick-up.png');

    destinationMarker.setPosition(new google.maps.LatLng(localStorage.getItem('destinationLat'), localStorage.getItem('destinationLng')));
    destinationMarker.setMap(map);
    destinationMarker.setAnimation(google.maps.Animation.DROP);
    destinationMarker.setIcon('/img/drop-off.png');

    var origininfowindow = new google.maps.InfoWindow();
    origininfowindow.setContent('Pick Up');
    origininfowindow.open(map, originMarker);

    var destinationinfowindow = new google.maps.InfoWindow();
    destinationinfowindow.setContent('Drop Off');
    destinationinfowindow.open(map, destinationMarker);
  });

  var originMarker = new google.maps.Marker({
    draggable: false
  });

  var destinationMarker = new google.maps.Marker({
    draggable: false
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
        { 
          componentRestrictions: {country: "ph"} 
        }
      );
      // Specify just the place data fields that you need.
      const destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput,
        { 
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
        $('#location_form input').each(function(){
          location_form.push({
            name: this.name, 
            value:  this.value
          });
        });
        
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
