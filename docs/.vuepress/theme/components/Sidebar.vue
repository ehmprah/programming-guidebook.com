<template>
  <div class="sidebar">
    <div class="sidebar__headline">Table of contents</div>
    <div class="sidebar__content">
      <TableOfContents/>
    </div>

    <div class="sidebar__headline">More from the author</div>
    <div class="sidebar__content">
      <p>
        I'm Mario "ehmprah" Kaiser and I develop games and things, all of which
        you can find at <a target="_blank" href="https://ehmprah.com/">ehmprah.com</a>. Follow me on
      <a target="_blank" href="https://twitter.com/ehmprah">Twitter</a> for updates.<p/>

      <p>This guidebook's source code is on
      <a
        href="https://github.com/ehmprah/programming-guidebook.com"
      >Github</a>. There also is a german version here: <a href="https://handbuch-programmieren.de">Handbuch Programmieren</a>.
      </p>
    </div>

    <div class="sidebar__headline">Other</div>
    <div class="sidebar__content">
      <a href="/imprint/">Imprint</a>
    </div>
  </div>
</template>

<script>
import TableOfContents from '@theme/components/TableOfContents';

export default {
  components: {
    TableOfContents,
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.sidebar {
  &__headline {
    color: $color-text-grey;
    border-bottom: 1px dashed $color-text-grey;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
  }

  &__content {
    margin-bottom: 2em;
  }
}
</style>




