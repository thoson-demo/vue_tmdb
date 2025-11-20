<script setup>
  import Logo from '../ui/Logo.vue'
  import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

  const footerLinks = [
    { text: 'Help', url: 'https://help.imdb.com/imdb' },
    {
      text: 'Site Index',
      url: 'https://help.imdb.com/article/imdb/general-information/imdb-site-index/GNCX7BHNSPBTFALQ#so',
    },
    {
      text: 'IMDbPro',
      url: 'https://pro.imdb.com/?ref_=cons_tf_pro&rf=cons_tf_pro',
    },
    { text: 'Box Office Mojo', url: 'https://www.boxofficemojo.com/' },
    { text: 'License IMDb Data', url: '#' },
    { text: 'Press Room', url: 'https://www.imdb.com/pressroom/?ref_=tt_ftr' },
    {
      text: 'Advertising',
      url: 'https://advertising.amazon.com/resources/ad-specs/imdb/',
    },
    { text: 'Jobs', url: 'https://www.amazon.jobs/en/teams/imdb' },
    {
      text: 'Conditions of Use',
      url: 'https://www.imdb.com/conditions/?ref_=tt_ftr',
    },
    {
      text: 'Privacy Policy',
      url: 'https://www.imdb.com/privacy/?ref_=tt_ftr',
    },
    {
      text: 'Your Ads Privacy Choices',
      url: 'https://www.imdb.com/privacy/redirect/?ref_=tt_ftr',
    },
  ]
</script>
<template>
  <footer class="app-footer">
    <div class="footer-hyperlink">
      <a
        v-for="(link, index) in footerLinks"
        :key="index"
        :href="link.url"
        class="footer-link"
      >
        <span>{{ link.text }}</span>
        <ArrowTopRightOnSquareIcon class="link-icon" />
      </a>
    </div>
    <span class="footer-amazon-company">An Amazon Company</span>
    <span class="footer-copyright">© 1990-2025 by thoson.it, Inc.</span>
  </footer>
</template>
<style scoped>
  .app-footer {
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .footer-hyperlink {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px 24px;
    width: 100%;
    max-width: 900px;
    justify-items: center;
    margin: 16px 0;
  }

  .footer-link {
    color: var(--md-sys-color-on-surface);
    font-size: 16px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    transition: opacity 0.2s ease;
  }

  .footer-link:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  .link-icon {
    width: 16px;
    height: 16px;
    padding-left: 4px;
  }

  .footer-amazon-company {
    color: var(--md-sys-color-on-surface);
    font-size: 16px;
    margin: 16px;
  }

  .footer-copyright {
    color: var(--md-sys-color-on-surface-variant);
    font-size: 12px;
    margin: 6px;
  }
</style>
