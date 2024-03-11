<script setup lang="ts">
import TurkeyMap from 'vue-turkiye-map';
import { ref } from 'vue';

const branches = [
    {
        id: 1,
        city: {
            id: 1,
            plateNumber: 34,
            name: 'İstanbul'
        },
        count: 39
    },
    {
        id: 2,
        city: {
            id: 2,
            plateNumber: 6,
            name: 'Ankara'
        },
        count: 8
    },
    {
        id: 3,
        city: {
            id: 3,
            plateNumber: 35,
            name: 'İzmir'
        },
        count: 4
    },
    {
        id: 4,
        city: {
            id: 4,
            plateNumber: 7,
            name: 'Antalya'
        },
        count: 3
    },
    {
        id: 5,
        city: {
            id: 5,
            plateNumber: 1,
            name: 'Adana'
        },
        count: 2
    },
    {
        id: 6,
        city: {
            id: 6,
            plateNumber: 9,
            name: 'Aydın'
        },
        count: 2
    },
    {
        id: 7,
        city: {
            id: 7,
            plateNumber: 31,
            name: 'Hatay'
        },
        count: 2
    },
    {
        id: 8,
        city: {
            id: 8,
            plateNumber: 41,
            name: 'Kocaeli'
        },
        count: 2
    },
    {
        id: 9,
        city: {
            id: 9,
            plateNumber: 42,
            name: 'Konya'
        },
        count: 2
    },
    {
        id: 10,
        city: {
            id: 10,
            plateNumber: 55,
            name: 'Samsun'
        },
        count: 2
    },
    {
        id: 11,
        city: {
            id: 11,
            plateNumber: 54,
            name: 'Sakarya'
        },
        count: 2
    }
]

const selectedCity = ref()

const getBranchCount = (cityId: number) => {
    const branch = branches.find((branch) => branch.city.plateNumber === cityId)
    return branch?.count || 0
}
</script>

<template>
    <div class="center">
        <h1>Turkiye Map - Branch Status</h1>
        <div v-if="selectedCity">
            <div>City : {{ selectedCity.name }}</div>
            <div>Count : {{ getBranchCount(selectedCity.id) }}</div>
        </div>
        <TurkeyMap @selected="selectedCity = $event">
            <template #tooltip="{ city }">
                <div v-if="city">
                    <div>City : {{ city.name }}</div>
                    <div>Count : {{ getBranchCount(city.id) }}</div>
                </div>
            </template>
        </TurkeyMap>
    </div>
</template>