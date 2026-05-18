<template>
  <div class="container view-container">
    <header class="header">
      <div class="header-title">
        <button class="btn-back" @click="$emit('back')">&larr; Back</button>
        <h2>{{ entityName }} Details</h2>
      </div>
    </header>

    <div class="layout-grid">
      <!-- LEFT: Fields Display -->
      <section class="fields-section">
        <div
          v-for="field in fields"
          :key="field.key"
          class="field-item"
          :class="{ 'field-item-large': field.type === 'large-text' }"
        >
          <span class="field-label">{{ field.label }}:</span>

          <!-- Explicit NULL rendering -->
          <span v-if="isNull(record[field.key])" class="field-value value-null"> NULL </span>

          <!-- Boolean Type -->
          <span v-else-if="field.type === 'boolean'" class="field-value">
            {{ record[field.key] ? 'True' : 'False' }}
          </span>

          <!-- Date/Datetime Type -->
          <span v-else-if="field.type === 'date'" class="field-value">
            {{ formatDate(record[field.key]) }}
          </span>

          <!-- Large Text Type -->
          <div v-else-if="field.type === 'large-text'" class="field-value large-text-box">
            {{ record[field.key] }}
          </div>

          <!-- String / Number / Default Type -->
          <span v-else class="field-value">
            {{ record[field.key] }}
          </span>
        </div>
      </section>

      <!-- RIGHT: Action Button Groups -->
      <aside v-if="actionGroups && actionGroups.length" class="actions-section">
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
      </aside>
    </div>
  </div>
</template>

<script setup>
/*const props = */ defineProps({
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
  // Example: { key: 'bio', label: 'Biography', type: 'large-text' }
  fields: {
    type: Array,
    required: true,
  },
  // Array of action groups
  // Example: [{ name: 'User Management', actions: [{ id: 'edit', label: 'Edit User', payload: { route: '/edit/1' } }] }]
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
  // Check if valid date
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
  // Emit the payload attached to the action configuration
  // The parent component can use this payload to redirect via vue-router
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

.layout-grid {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

/* Fields Section */
.fields-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.field-item {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px dashed var(--border-color);
  padding-bottom: 0.5rem;
}

.field-item-large {
  flex-direction: column;
  border-bottom: none; /* Removed so the box itself defines the boundary */
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
  max-width: 600px;
  max-height: 200px;
  overflow-y: auto;
  padding: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  white-space: pre-wrap; /* Preserves line breaks from the database */
}

/* Actions Section */
.actions-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 1.5rem;
  border-left: 1px solid var(--border-color);
}

.action-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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

.group-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-btn {
  text-align: left;
  width: 100%;
}

/* Responsive constraints */
@media (max-width: 768px) {
  .layout-grid {
    flex-direction: column;
  }

  .actions-section {
    width: 100%;
    padding-left: 0;
    border-left: none;
    border-top: 1px solid var(--border-color);
    padding-top: 1.5rem;
  }

  .field-item {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
