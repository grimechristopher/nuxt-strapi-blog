<template>
    <div class="bg-primary-200">
        <div class="flex flex-row items-baseline justify-between py-6 px-4">
                <NuxtLink to="/" class="text-xl font-medium">
                    <strong>{{ global.siteName }}</strong>
                </NuxtLink>
            <nav class="flex flex-row items-baseline justify-end">
                <NuxtLink class="font-medium px-2" to="/about">About Us</NuxtLink>
                <NuxtLink 
                    v-for="category in categories"
                    :to="{ name: 'categories-slug', params: { slug: category.attributes.slug } }"
                    class="font-medium px-2" 
                >{{ category.attributes.name }}</NuxtLink>
            </nav>
        </div>
    </div>
</template>

<script setup>
    const { find } = useStrapi4();
    const globalResponse = await find('global', {
        populate: 'deep',
    });
    let global = globalResponse.data.attributes;
    
    const categoriesResponse = await find('categories', {
        populate: 'deep',
    });
    let categories = categoriesResponse.data
</script>