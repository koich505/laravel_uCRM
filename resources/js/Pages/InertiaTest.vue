<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const newTitle = ref("");
const newContent = ref("");
</script>

<template>
    Inertiaテストです<br />
    <a href="/">aタグ経由</a><br />
    <Link href="/">Link経由</Link><br />
    <Link :href="route('inertia.index')">名前付きルートの確認</Link><br />
    <Link :href="route('inertia.show', { id: 1 })"
        >ルートパラメータのテスト</Link
    ><br />
    <div class="mb-8"></div>
    <input type="text" v-model="newTitle" />{{ newTitle }}<br /><br />
    <input type="text" v-model="newContent" />{{ newContent }}<br /><br />
    <Link
        as="button"
        method="POST"
        :href="route('inertia.store')"
        :data="{
            title: newTitle,
            content: newContent,
        }"
        >DB保存テスト</Link
    >
</template>
