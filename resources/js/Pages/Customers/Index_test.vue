<script setup>
import FlashMessage from "@/Components/FlashMessage.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
//import { Head } from '@inertiajs/vue3';
import { Head, Link } from "@inertiajs/inertia-vue3";
import Pagination from "@/Components/Pagination.vue";
import { onMounted } from "vue";

const props = defineProps({
    customers: Object,
});

onMounted(() => {
    console.log(props.customers);
});
</script>

<template>
    <!-- <ul v-for="customer in customers.data" :key="customer.id">
        <li>{{ customer.id }}</li>
        <li>{{ customer.name }}</li>
    </ul>
    <Pagination class="mt-6" :links="customers.links"></Pagination> -->
</template>
