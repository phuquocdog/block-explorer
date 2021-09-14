<template>
  <b-container class="pt-4">
    <b-row class="center pt-4">
      <b-card title="Team ColmenaLabs">We have development experience, including front-end development, back-end development, Devops, etc. We have participated in the Vietnam blockchain. We has in-depth research and accumulation of blockchain technology.
      </b-card>
    </b-row>
    <b-row class="pt-4">
      <b-card-group deck>
        <b-col
          v-for="member in members"
          :key="member.name"
          sm="12"
          md="6"
          lg="3"
          class="member mb-3 pb-3"
        >
          <b-card
            :title="member.name"
            :img-src="member.picture"
            img-alt="Image"
            img-top
            class="h-100"
          >
            {{ member.description }}
          </b-card>
        </b-col>
      </b-card-group>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Thien Tran',
          picture: '/img/team/thientran.jpg',
          description:'Founder & dev lead, full stack developer / Susbtrate lover',
        },
        {
          name: 'Nhi Y',
          picture: '/img/team/ynhi.jpg',
          description:'Nhi is our esteemed medical intuitive, behaviorist.',
        },
        {
          name: 'Thanh Ba',
          picture: '/img/team/thanh.jpg',
          description: 'Gravitoncoin founder, Mobile developer',
        },
        {
          name: 'Le Phuc',
          picture: '/img/team/phuc.jpeg',
          description: 'Frontend developer & javascript/vue/react ninja',
        }
      ],
    }
  },
}
</script>

<style scoped>
.center {
  justify-content: center;
}
.member {
  margin: 0;
  padding: 0;
}

@media (max-width: 991px) {
  .member {
    padding-bottom: 1.5rem;
  }
}

@media (max-width: 575px) {
  .member {
    padding: 1rem;
  }
}
</style>
