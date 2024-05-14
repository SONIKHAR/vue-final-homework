<template>
  <header>  
    <v-card>
      <v-tabs
        v-model="tab"
        align-tabs="center"
        color="deep-purple-accent-4"
      >
        <v-tab :value="1"> <RouterLink to="/">Home</RouterLink> </v-tab>
        <v-tab :value="2"> <RouterLink to="/contact-us">Contact us</RouterLink>  </v-tab>
        <v-tab :value="3"> <RouterLink to="/about">About us</RouterLink> </v-tab>
      </v-tabs>
  
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="n in 3"
          :key="n"
          :value="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 2"
                :key="i"
                cols="12"
                md="4"
              >
             
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>

  </header>

  
</template>

<script src="./header.js"></script>
