<template>
  <div>
    <section>
      <b-container class="main py-5 support-us">
        <h1 class="mb-4">
          {{
            $t('pages.how_to_stake.title', {
              networkName: network.name,
            })
          }}
        </h1>
        <b-breadcrumb :items="breadcrumbsItems"></b-breadcrumb>
        <div class="row">
          <div class="col-12">
            <p>Update coming soon!</p>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>
<script>
import commonMixin from '~/mixins/commonMixin.js'
import { network } from '~/frontend.config.js'

export default {
  mixins: [commonMixin],
  data() {
    return {
      network,
      breadcrumbsItems: [
        {
          text: this.$t('pages.home.title'),
          href: '/',
        },
        {
          text: this.$t('pages.how_to_stake.title', {
            networkName: network.name,
          }),
          href: '#',
        },
      ],
    }
  },
  head() {
    return {
      title: this.$t('pages.how_to_stake.head_title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.how_to_stake.head_content'),
        },
      ],
    }
  },
}
</script>
