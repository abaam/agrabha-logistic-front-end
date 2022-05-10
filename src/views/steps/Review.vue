<template>
  <!-- Delivery Address -->
  <div class="mx-auto max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6">
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <LocationMarkerIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Location</h6>
        </div>
        <span id="location-change" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Change</span
        >
        <span id="location-save" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Save</span
        >
        <span id="location-cancel" 
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Cancel</span
        >
      </div>
    </div>
    <div class="mb-4 flex items-center gap-2 h-96" id="map"></div>
    <div class="relative mb-4">
      <Field
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
  </div>
  <!-- /Delivery Address -->

  <!-- Payment method -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <CreditCardIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Payment Method</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start space-x-4">
        <img
          src="../../../public/img/gcash-logo.png"
          alt="GCash Logo"
          class="w-8 rounded"
        />
        <div class="grid">
          <span class="block font-semibold">GCash</span>
          <span class="block">09*****8520</span>
        </div>
      </div>
      <p class="font-semibold">₱ 127.00</p>
    </div>
  </div>
  <!-- /Payment method -->

  <!-- Vehicle Type -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <TruckIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Vehicle Type</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <p>To be delivered via <span class="font-semibold">Truck</span>.</p>
  </div>
  <!-- /Vehicle Type -->

  <!-- Delivery summary -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <CubeIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Package Details</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div class="mb-2 flex items-center justify-between">
      <p>Sample details</p>
      <p>₱ 88.00</p>
    </div>
    <hr class="mb-2" />
    <div class="mb-2 flex items-center justify-between">
      <p class="text-grey-dark">Subtotal</p>
      <p class="text-grey-dark">₱ 88.00</p>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-grey-dark">Delivery Fee</p>
      <p class="text-grey-dark">₱ 39.00</p>
    </div>
  </div>
  <!-- /Delivery summary -->
</template>

<script>
import $ from "jquery";
import { Field, ErrorMessage } from "vee-validate";
import {
  TruckIcon,
  CubeIcon,
  PencilIcon,
  LocationMarkerIcon,
  CreditCardIcon,
} from "@heroicons/vue/outline";
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
    CubeIcon,
    PencilIcon,
    TruckIcon,
    LocationMarkerIcon,
    CreditCardIcon,
    Field,
    ErrorMessage
  },
  mounted: function() {
    loadScript("https://polyfill.io/v3/polyfill.min.js?features=default")
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDvyM1P3tN2XIcXX0u6BMz2NHwlwQuYz4A&libraries=places")
    .then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: 12.8819585, 
          lng: 121.76654050000002
        },
        scrollwheel: false,
        zoom: 4
      })

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });

      directionsRenderer.setMap(map);

      directionsService.route(
        {
          origin: { 
            lat: parseFloat(JSON.parse(localStorage['location_form'])[1]), 
            lng: parseFloat(JSON.parse(localStorage['location_form'])[2]) 
          },
          destination: { 
            lat: parseFloat(JSON.parse(localStorage['location_form'])[4]), 
            lng: parseFloat(JSON.parse(localStorage['location_form'])[5]) 
          },
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

      const originInput = document.getElementById("origin-input");
      const destinationInput = document.getElementById("destination-input");

      const originAutocomplete = new google.maps.places.Autocomplete(
        originInput,
        { 
          componentRestrictions: {country: "ph"} 
        }
      );
      const destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput,
        { 
          componentRestrictions: {country: "ph"} 
        }
      );

      $('#origin-input').hide();
      $('#destination-input').hide();
      $("[for='pick-up']").hide();
      $("[for='drop-off']").hide();
      $("#location-save").hide();
      $("#location-cancel").hide();

      $("#location-change").click(function() {
        setupPlaceChangedListener(originAutocomplete, "ORIG");
        setupPlaceChangedListener(destinationAutocomplete, "DEST");
        $('#origin-input').show();
        $('#destination-input').show();
        $("[for='pick-up']").show();
        $("[for='drop-off']").show();
        $("#location-save").show();
        $("#location-cancel").show();
        $("#location-change").hide();
      });
    })
  },
};
</script>
