<template>
  <div class="sidebar">
    <div class="sidebar__headline">Table of contents</div>
    <TableOfContents/>

    <div class="sidebar__headline">More from the author</div>
    <p>
      I'm blogging on at
      <a target="_blank" href="https://frgmnts.blog">frgmnts.blog</a> and I'm on
      <a target="_blank" href="https://twitter.com/ehmprah">Twitter</a> and
      <a target="_blank" href="https://www.linkedin.com/in/ehmprah/">Linkedin</a>.
      This guidebook's source code is on
      <a
        href="https://github.com/ehmprah/programming-guidebook.com"
      >Github</a>. This guidebook also exists in <a href="https://handbuch-programmieren.de">German</a>.
    </p>

    <div class="sidebar__headline">Other</div>
    <p>
      <a href="/imprint/">Imprint</a>
    </p>
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
}
</style>




