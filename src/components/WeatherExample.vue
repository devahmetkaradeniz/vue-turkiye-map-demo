<script setup lang="ts">
import TurkeyMap from 'vue-turkiye-map';
import { onMounted, ref } from 'vue';

const WEATHER_API_KEY = "2d48b1d7080d09ea964e645ccd1ec93f"

const weather = async (latitude: number, longitude: number): Promise<any> => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`

    const response = await fetch(apiUrl)
    return await response.json()
}

const selectedCity = ref()

const selectedCityId = ref()

const weatherInfo = ref()

const selectedCityHandler = async (city: any) => {
    selectedCity.value = city
    if (!city) return

    weatherInfo.value = await weather(city.latitude, city.longitude)
}

onMounted(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords
        weatherInfo.value = await weather(latitude, longitude)
        selectedCityId.value = weatherInfo.value.name == 'Izmir' ? 35 : 0
    })
})
</script>

<template>
    <div class="center">
        <h1>Turkiye Map - Weather</h1>
        <div v-if="weatherInfo && selectedCity">
            <div>City : {{ selectedCity?.name }}</div>
            <div>Weather Information : {{ weatherInfo.weather[0].description }}</div>
        </div>
        <TurkeyMap @selected="selectedCityHandler($event)" :selectedCityId="selectedCityId"></TurkeyMap>
    </div>
</template>