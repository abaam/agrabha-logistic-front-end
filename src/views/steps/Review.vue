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
      <Field
        type="hidden"
        as="input"
        id="origin-input-lat"
        name="pick_up_lat"
        placeholder="Pick Up Latitude"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <Field
        type="hidden"
        as="input"
        id="origin-input-lng"
        name="pick_up_lng"
        placeholder="Pick Up Longitude"
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
      <Field
        type="hidden"
        as="input"
        id="destination-input-lat"
        name="drop_off_lat"
        placeholder="Drop Off Latitude"
        class="peer focus:outline-none relative mt-1 block w-full appearance-none rounded border border-grey px-3 py-2 text-gray-600 placeholder-transparent placeholder-grey focus:z-10 focus:border-grey-dark focus:ring-0 focus:ring-grey-dark"
      />
      <Field
        type="hidden"
        as="input"
        id="destination-input-lng"
        name="drop_off_lng"
        placeholder="Drop Off Longitude"
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
    <div class="inline-flex w-full space-x-4" id="location-buttons">
      <span id="location-save" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</span>
      <span id="location-cancel" class="cursor-pointer mb-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Cancel</span>
    </div>
  </div>
  <!-- /Delivery Address -->

  <!-- Package Details -->
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
      <p>Item</p>
      <p id="package-item"></p>
    </div>
    <div class="mb-2 flex items-center justify-between">
      <p>Quantity</p>
      <p id="package-quantity"></p>
    </div>
    <div class="mb-2 flex items-center justify-between">
      <p>Unit</p>
      <p id="package-unit"></p>
    </div>
    <div class="mb-2 flex items-center justify-between">
      <p>Note</p>
      <p id="package-note"></p>
    </div>
  </div>
  <!-- Package Details -->

  <!-- Receiver's Information -->
  <div
    class="mx-auto mt-4 max-w-lg rounded-md bg-white px-3 py-4 shadow sm:p-6"
  >
    <div class="mb-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-2">
          <UserIcon class="h-8 w-8 text-blue-light" />
          <h6 class="text-sm font-semibold uppercase">Receiver's Information</h6>
        </div>
        <span
          class="cursor-pointer text-sm font-semibold uppercase text-blue-light hover:text-blue focus:text-blue"
          >Edit</span
        >
      </div>
    </div>
    <div class="mb-2 flex items-center justify-between">
      <p>Name</p>
      <p id="receiver-name"></p>
    </div>
    <div class="mb-2 flex items-center justify-between">
      <p>Contact Number</p>
      <p id="receiver-contact"></p>
    </div>
  </div>
  <!-- Package Details -->

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
    <p>To be delivered via <span class="font-semibold" id="vehicle-type">Truck</span>.</p>
  </div>
  <!-- /Vehicle Type -->

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
        <img id="payment-logo" 
          src="../../../public/img/gcash-logo.png"
          alt="GCash Logo"
          class="w-8 rounded"
        />
        <div class="grid">
          <span class="block font-semibold" id="payment-method">GCash</span>
          <!-- <span class="block">09*****8520</span> -->
        </div>
      </div>
      <p class="font-semibold" id="payment-total"></p>
    </div>
    <hr class="mb-4 mt-2" />
    <div class="mb-2 flex items-center justify-between">
      <p class="text-grey-dark">Distance</p>
      <p id="total-amount" class="text-grey-dark"></p>
    </div>
    <div class="flex items-center justify-between">
      <p class="text-grey-dark">Delivery Fee</p>
      <p class="text-grey-dark" id="delivery-fee"></p>
    </div>
  </div>
  <!-- /Payment method -->
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
  UserIcon,
} from "@heroicons/vue/outline";
import { loadScript } from "vue-plugin-load-script";
import ButtonSolidBlue from '../../components/buttons/ButtonSolidBlue'

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
    origininfowindow.setContent('Pick Up: ' + origin_input);
    origininfowindow.open(map, originMarker);

    var destinationinfowindow = new google.maps.InfoWindow();
    destinationinfowindow.setContent('Drop Off: ' + destination_input);
    destinationinfowindow.open(map, destinationMarker);
  });

  var originMarker = new google.maps.Marker({
    draggable: false
  });

  var destinationMarker = new google.maps.Marker({
    draggable: false
  });
}

function initializeMap(){
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
        lat: parseFloat(JSON.parse(localStorage['booking_form'])[8]), 
        lng: parseFloat(JSON.parse(localStorage['booking_form'])[9]) 
      },
      destination: { 
        lat: parseFloat(JSON.parse(localStorage['booking_form'])[11]), 
        lng: parseFloat(JSON.parse(localStorage['booking_form'])[12]) 
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

  var originMarker = new google.maps.Marker({
    draggable: false,
    icon: '/img/pick-up.png',
    position: new google.maps.LatLng(JSON.parse(localStorage['booking_form'])[8], JSON.parse(localStorage['booking_form'])[9]),
    animation: google.maps.Animation.DROP,
    map: map
  });

  var destinationMarker = new google.maps.Marker({
    draggable: false,
    icon: '/img/drop-off.png',
    position: new google.maps.LatLng(JSON.parse(localStorage['booking_form'])[11], JSON.parse(localStorage['booking_form'])[12]),
    animation: google.maps.Animation.DROP,
    map: map
  });

  var distance = haversineDistance(originMarker, destinationMarker);
  $('#total-amount').html(parseFloat(distance.toFixed(2)).toLocaleString() + ' Kms');
  localStorage.setItem('distance', distance.toFixed(2))

  var origin_input = JSON.parse(localStorage['booking_form'])[7];
  var destination_input = JSON.parse(localStorage['booking_form'])[10];
  var origininfowindow = new google.maps.InfoWindow();
  origininfowindow.setContent('Pick Up: ' + origin_input);
  origininfowindow.open(map, originMarker);

  var destinationinfowindow = new google.maps.InfoWindow();
  destinationinfowindow.setContent('Drop Off: ' + destination_input);
  destinationinfowindow.open(map, destinationMarker);
}

function haversineDistance(mk1, mk2) {
    var rad = 6371.0710; // Radius of the Earth in kms
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * rad * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
}

function hideDestinationInputs(){
  $('#origin-input').hide();
  $('#destination-input').hide();
  $("[for='pick-up']").hide();
  $("[for='drop-off']").hide();
  $("#location-buttons").hide();
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
    ErrorMessage,
    ButtonSolidBlue,
    UserIcon
  },
  mounted: function() {
    loadScript("https://polyfill.io/v3/polyfill.min.js?features=default")
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDvyM1P3tN2XIcXX0u6BMz2NHwlwQuYz4A&libraries=places")
    .then(() => {

      initializeMap()

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

      hideDestinationInputs()

      var originMarker = new google.maps.Marker({
        draggable: false,
        icon: '/img/pick-up.png',
        position: new google.maps.LatLng(JSON.parse(localStorage['booking_form'])[8], JSON.parse(localStorage['booking_form'])[9]),
        animation: google.maps.Animation.DROP,
        map: map
      });

      var destinationMarker = new google.maps.Marker({
        draggable: false,
        icon: '/img/drop-off.png',
        position: new google.maps.LatLng(JSON.parse(localStorage['booking_form'])[11], JSON.parse(localStorage['booking_form'])[12]),
        animation: google.maps.Animation.DROP,
        map: map
      });

      var distance = haversineDistance(originMarker, destinationMarker);
      $('#total-amount').html(parseFloat(distance.toFixed(2)).toLocaleString() + ' Kms');
      $('#payment-total').html('₱ ' + parseFloat(localStorage.getItem('distance') * 200).toLocaleString());
      $('#pay-button').html('₱ ' + parseFloat(localStorage.getItem('distance') * 200).toLocaleString());

      $("#location-change").click(function() {
        setupPlaceChangedListener(originAutocomplete, "ORIG");
        setupPlaceChangedListener(destinationAutocomplete, "DEST");
        $('#origin-input').show();
        $('#destination-input').show();
        $("[for='pick-up']").show();
        $("[for='drop-off']").show();
        $("#location-buttons").show();
        $("#location-change").hide();

        $('#origin-input').val('')
        $('#destination-input').val('')
      });

      $("#location-save").click(function(e) {        
        var origin_input = $('#origin-input').val();
        var destination_input = $('#destination-input').val();

        if(origin_input !== '' && destination_input !== ''){
          let booking_form = JSON.parse(localStorage['booking_form']);
          booking_form.splice(7, 1, origin_input)
          booking_form.splice(8, 1, $('#origin-input-lat').val())
          booking_form.splice(9, 1, $('#origin-input-lng').val())
          booking_form.splice(10, 1, destination_input)
          booking_form.splice(11, 1, $('#destination-input-lat').val())
          booking_form.splice(12, 1, $('#destination-input-lng').val())
          
          localStorage['booking_form'] = JSON.stringify(booking_form);
          hideDestinationInputs()
          $("#location-change").show();

          var originMarker = new google.maps.Marker({
            draggable: false,
            icon: '/img/pick-up.png',
            position: new google.maps.LatLng($('#origin-input-lat').val(), $('#origin-input-lng').val()),
            animation: google.maps.Animation.DROP,
            map: map
          });

          var destinationMarker = new google.maps.Marker({
            draggable: false,
            icon: '/img/drop-off.png',
            position: new google.maps.LatLng($('#destination-input-lat').val(), $('#destination-input-lng').val()),
            animation: google.maps.Animation.DROP,
            map: map
          });

          var distance = haversineDistance(originMarker, destinationMarker);
          localStorage.setItem('distance', distance.toFixed(2))
          $('#total-amount').html(parseFloat(distance.toFixed(2)).toLocaleString() + ' Kms');
          $('#payment-total').html('₱ ' + parseFloat(localStorage.getItem('distance') * 200).toLocaleString());
          $('#pay-button').html('₱ ' + parseFloat(localStorage.getItem('distance') * 200).toLocaleString());
        } else {
          alert("Please select an option from the dropdown list.");
        }
      });

      $("#location-cancel").click(function(e) {        
        initializeMap()
        hideDestinationInputs()
        $("#location-change").show();
      });
    })

    $('#package-item').html(JSON.parse(localStorage['booking_form'])[0]);
    $('#package-quantity').html(JSON.parse(localStorage['booking_form'])[1]);
    $('#package-unit').html(JSON.parse(localStorage['booking_form'])[2]);
    $('#package-note').html(JSON.parse(localStorage['booking_form'])[3]);
    $('#receiver-name').html(JSON.parse(localStorage['booking_form'])[4]);
    $('#receiver-contact').html(JSON.parse(localStorage['booking_form'])[5]);
    $('#vehicle-type').html(JSON.parse(localStorage['booking_form'])[6]);
    $('#payment-method').html(JSON.parse(localStorage['booking_form'])[14]);

    if (JSON.parse(localStorage['booking_form'])[14] == 'Paymaya') {
      var payment_logo = "/img/paymaya-logo.png"
    } else {
      var payment_logo = "/img/gcash-logo.png"
    }

    $('#payment-logo').attr('src', payment_logo);
    $('#delivery-fee').html('₱ 200.00 /Kms');
  },
};
</script>
