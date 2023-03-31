<script setup>
import Guestlayout from "@/Layouts/GuestLayout.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";

const emitTest = (e) => {
    console.log(e);
};
</script>

<template>
    <Guestlayout>
        <InputLabel value="件名"></InputLabel>
        <TextInput
            modelValue="初期値"
            @update:modelValue="emitTest"
        ></TextInput>
    </Guestlayout>
</template>
