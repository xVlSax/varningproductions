<template>
  <section class="modal-event-description">
    <header class="modal-event-header">
      <h2 class="modal-event-title">{{ details.title }}</h2>
      <h3 v-if="details.subtitle" class="modal-event-subtitle">{{ details.subtitle }}</h3>
    </header>

    <div class="modal-event-body">
      <section
        v-for="(section, index) in details.sections"
        :key="`${section.title}-${index}`"
        class="modal-event-block"
      >
        <h3 class="modal-event-block-title">{{ section.title }}</h3>

        <p
          v-for="(paragraph, paragraphIndex) in section.paragraphs || []"
          :key="`${section.title}-paragraph-${paragraphIndex}`"
          class="modal-event-paragraph"
        >
          {{ paragraph }}
        </p>

        <div
          v-for="(group, groupIndex) in section.groups || []"
          :key="`${section.title}-group-${groupIndex}`"
          class="modal-event-group"
        >
          <p v-if="group.heading" class="modal-event-group-heading">{{ group.heading }}</p>

          <ul v-if="group.items?.length" class="modal-event-list">
            <li
              v-for="(item, itemIndex) in group.items"
              :key="`${section.title}-item-${itemIndex}`"
              class="modal-event-list-item"
            >
              <a
                v-if="item.href"
                :href="item.href"
                class="modal-event-link"
                target="_blank"
                rel="noreferrer"
              >
                {{ item.name }}
              </a>
              <span v-else class="modal-event-item-name">{{ item.name }}</span>
              <span v-if="item.meta" class="modal-event-item-meta">({{ item.meta }})</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
defineProps({
  details: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.modal-event-description {
  width: 100%;
  text-align: left;
}

.modal-event-header {
  margin-bottom: 1.25rem;
  text-align: center;
}

.modal-event-title {
  margin: 0;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(1.5rem, 2.8vw, 2.4rem);
  letter-spacing: 0.04em;
  line-height: 1;
  text-transform: uppercase;
}

.modal-event-subtitle {
  margin: 0.45rem 0 0;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: clamp(0.95rem, 1.6vw, 1.2rem);
  letter-spacing: 0.14em;
  line-height: 1.1;
  text-transform: uppercase;
}

.modal-event-body {
  color: rgba(233, 233, 233, 0.9);
  font-size: 0.98rem;
  line-height: 1.75;
  font-family: 'Lucky', sans-serif;
}

.modal-event-block + .modal-event-block {
  margin-top: 1.3rem;
}

.modal-event-block-title {
  margin: 0 0 0.45rem;
  color: #fff;
  font-family: 'Staatliches', sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.modal-event-paragraph,
.modal-event-group-heading {
  margin: 0 0 0.45rem;
}

.modal-event-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.modal-event-list-item + .modal-event-list-item {
  margin-top: 0.45rem;
}

.modal-event-link,
.modal-event-item-name {
  color: #fff;
  font-weight: 700;
}

.modal-event-link {
  text-decoration: underline;
  text-underline-offset: 0.16em;
}

.modal-event-link:hover {
  color: #ef4444;
}

.modal-event-item-meta {
  margin-left: 0.35rem;
  color: rgba(233, 233, 233, 0.82);
}

@media (max-width: 640px) {
  .modal-event-body {
    font-size: 0.92rem;
    line-height: 1.68;
  }
}
</style>
