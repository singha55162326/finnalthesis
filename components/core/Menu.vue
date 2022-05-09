<template>
  <v-navigation-drawer app permanent>
    <router-link to="/" exact>
      <v-img src="@/assets/ptt.jpg" alt="" width="100%" />
    </router-link>
    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item v-for="([icon, title], index) in menus" :key="index">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-human-male-male", "Customer", "/customer"],
        ["mdi-truck-delivery", "Delivery", "/delivery"],
        ["mdi-human-male-male", "Employee", "/employee"],
        ["mdi-file-document-outline", "Document", "/document"],
        ["mdi-cart", "Order", "/order"],
        ["mdi-cash", "Price", "/price"],
      ],
    };
  },
};
</script>

<style></style>
