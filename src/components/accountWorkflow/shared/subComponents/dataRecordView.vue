<template>
  <div class="container view-container">
    <header class="header">
      <div class="header-title">
        <button class="btn-back" @click="$emit('back')">&larr; Back</button>
        <h2>{{ entityName }} Details</h2>
      </div>
    </header>

    <div class="layout-stack">
      <section class="fields-section">
        <div
          v-for="field in fields"
          :key="field.key"
          class="field-item"
          :class="{ 'field-item-large': field.type === 'large-text' }"
        >
          <span class="field-label">{{ field.label }}:</span>

          <span v-if="isNull(record[field.key])" class="field-value value-null"> NULL </span>

          <span v-else-if="field.type === 'boolean'" class="field-value">
            {{ record[field.key] ? 'True' : 'False' }}
          </span>

          <span v-else-if="field.type === 'date'" class="field-value">
            {{ formatDate(record[field.key]) }}
          </span>

          <div v-else-if="field.type === 'large-text'" class="field-value large-text-box">
            {{ record[field.key] }}
          </div>

          <span v-else class="field-value">
            {{ record[field.key] }}
          </span>
        </div>
      </section>

      <footer v-if="actionGroups && actionGroups.length" class="actions-section">
        <div v-for="group in actionGroups" :key="group.name" class="action-group">
          <h3 class="group-title">{{ group.name }}</h3>
          <div class="group-buttons">
            <button
              v-for="action in group.actions"
              :key="action.id"
              class="action-btn"
              @click="handleActionClick(action)"
            >
              {{ action.label }}
            </button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
defineProps({
  entityName: {
    type: String,
    default: 'Record',
  },
  // The actual database row data
  record: {
    type: Object,
    required: true,
  },
  // Array of field configurations
  fields: {
    type: Array,
    required: true,
  },
  // Array of action groups
  actionGroups: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['back', 'execute-action'])

// Helper to reliably check for null or undefined data
const isNull = (value) => {
  return value === null || value === undefined
}

// Basic datetime formatting
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString

  return new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

const handleActionClick = (action) => {
  emit('execute-action', action.payload)
}
</script>

<style scoped>
.overContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

button {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
}

.view-container {
  max-width: 1000px;
  width: 100%;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-title h2 {
  margin: 0;
}

.btn-back {
  font-weight: bold;
  padding: 0.4rem 0.8rem;
}

/* Structural Stack Layout */
.layout-stack {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* Fields Section */
.fields-section {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
}

.field-item {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px dashed var(--border-color);
  padding-bottom: 0.5rem;
}

.field-item-large {
  flex-direction: column;
  border-bottom: none;
  gap: 0.5rem;
}

.field-label {
  font-weight: bold;
  min-width: 150px;
  flex-shrink: 0;
}

.field-value {
  flex-grow: 1;
  word-break: break-word;
}

.value-null {
  font-style: italic;
  opacity: 0.6;
}

.large-text-box {
  width: 100%;
  max-width: 800px;
  max-height: 200px;
  overflow-y: auto;
  padding: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  white-space: pre-wrap;
}

/* Actions Section positioned cleanly below */
.actions-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  width: 100%;
}

.action-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.group-title {
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.25rem;
}

/* Grid/Row mapping for horizontal button distribution */
.group-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.action-btn {
  text-align: center;
  width: auto;
  min-width: 140px;
}

/* Responsive constraints */
@media (max-width: 768px) {
  .field-item {
    flex-direction: column;
    gap: 0.25rem;
  }

  .group-buttons {
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
    text-align: left;
  }
}
</style>
