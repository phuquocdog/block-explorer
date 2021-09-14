<template>
  <div id="footer" class="container-fluid footer mt-4">
    <footer class="text-muted">
      <div class="container">
        <div class="row mt-4 pt-5">
          <div class="col-12 text-center">
            <img
              class="img-fluid"
              src="/img/logo-light.png"
              style="max-width: 300px"
            />
          </div>
        </div>
        <div class="row mt-4 pt-5">
          <div
            class="
              col-xs-12 col-sm-12 col-md-4
              mt-2
              mb-4
              pb-4
              mt-sm-2
              text-center text-white
            "
            data-testid="footer-getInContact"
          >
            <h3 class="mb-3">
              {{ $t('layout.default.get_in_contact') }}
            </h3>
            <hr />
            <ul class="list-unstyled social text-center">
              <li class="mr-2" data-testid="footer-twitter">
                <a target="_blank" href="https://twitter.com/phuquoc_dog">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                  @phuquoc_dog
                </a>
              </li>
              <li class="mr-2" data-testid="footer-pgp">
                <a target="_blank" href="https://keybase.io">
                  <font-awesome-icon :icon="['fab', 'keybase']" />
                  PGP: XXXX PQDZ PLMN
                </a>
              </li>
              <li data-testid="footer-email">
                <a target="_blank" href="mailto:hello@phuquoc.dog">
                  <font-awesome-icon icon="envelope" />
                  hello@phuquoc.dog</a
                >
              </li>
            </ul>
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-4
              mt-2
              mb-4
              pb-4
              mt-sm-2
              text-center text-white
            "
            data-testid="footer-polkadot"
          >
            <h3 class="mb-3">Phu Quoc Dog</h3>
            <hr />
            <nuxt-link
              to="/team"
              active-class="nuxt-link-exact-active"
              class="nav-link"
              data-testid="aboutUs"
            >
              {{ $t('layout.default.about_us') }}
            </nuxt-link>
            <nuxt-link
              to="/support-us"
              active-class="nuxt-link-exact-active"
              class="nav-link"
              data-testid="supportPolkastats"
            >
              {{ $t('Phu Quoc Dog') }}
            </nuxt-link>
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-4
              mt-2
              mb-4
              pb-4
              mt-sm-2
              text-center text-white
            "
            data-testid="footer-builtFor"
          >
            <h3 class="mb-3">
              {{ $t('layout.default.built_with') }}
            </h3>
            <hr />
            <a href="#" target="_blank">
              <img
                src="/img/grant_aws.png"
                class="grant-badge"
                alt="aws foundation grants program"
              />
            </a>
          </div>
        </div>
        <p
          class="small pt-4 text-center text-white"
          data-testid="footer-bottom"
        >
          <nuxt-link to="/">
            {{ $t('Built by the same team behind Polkastats') }}
          </nuxt-link>
          <span class="mx-2">|</span> {{ $t('layout.default.built_with') }}
          <a href="https://phuquoc.dog">Basic Phu Quoc Dog Coin</a>
          <span class="mx-2">|</span>
          <a
            href="https://github.com/phuquocdog"
            aria-label="View source on GitHub"
            title="View source code on GitHub"
            target="_blank"
            data-testid="github"
            ><i class="fab fa-github" />
            {{ $t('layout.default.view_source_code_on_github') }}</a
          >
        </p>
      </div>
    </footer>
    <a
      href="https://github.com/phuquocdog"
      class="github-corner"
      aria-label="View source on GitHub"
      title="View source code on GitHub"
      target="_blank"
    >
    </a>
  </div>
</template>
<script>
export default {}
</script>
