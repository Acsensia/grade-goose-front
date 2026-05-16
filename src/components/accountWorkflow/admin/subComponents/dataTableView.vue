<template>
  <div class="data-view-wrapper">
    <!-- LEFT: Sidebar Menu for Filters -->
    <aside class="sidebar">
      <h3>Filters</h3>
      <div class="filter-list">
        <!-- filters is an array of arrays: [attributeName, displayName, filterValue] -->
        <div v-for="(filter, index) in localFilters" :key="index" class="filter-item">
          <label :for="'filter-' + index">{{ filter[1] }}</label>
          <input
            :id="'filter-' + index"
            type="text"
            v-model="filter[2]"
            :disabled="isSelectionMode"
            @input="resetPagination"
            placeholder="Search..."
          />
        </div>
      </div>
    </aside>

    <!-- RIGHT: Main Content Area -->
    <main class="main-content">
      <!-- TOP: Action Menu -->
      <header class="action-menu">
        <div v-if="!isSelectionMode" class="standard-actions">
          <button
            v-for="(action, index) in groupActions"
            :key="index"
            @click="enterSelectionMode(action)"
          >
            {{ action.name }}
          </button>
        </div>

        <div v-else class="selection-actions">
          <button
            class="action-btn confirm"
            :disabled="selectedRowIds.length === 0"
            @click="confirmOperation"
          >
            Confirm {{ currentAction.name }} ({{ selectedRowIds.length }})
          </button>
          <button class="action-btn cancel" @click="cancelOperation">
            Cancel {{ currentAction.name }}
          </button>
        </div>
      </header>

      <!-- MIDDLE: Row List -->
      <div class="row-list">
        <label
          v-for="row in paginatedRows"
          :key="row.id"
          class="row-item"
          :class="{ 'selection-mode': isSelectionMode }"
        >
          <!-- Hidden normally, visible and functional in selection mode -->
          <input
            v-if="isSelectionMode"
            type="checkbox"
            :value="row.id"
            v-model="selectedRowIds"
            class="row-checkbox"
          />

          <!-- Row Button acts as the data display container -->
          <button
            class="row-btn"
            :disabled="isSelectionMode"
            @click="!isSelectionMode && $emit('view-details', row.id)"
          >
            <span class="row-data" v-for="[key, value] in Object.entries(row)" :key="key">
              <template v-if="key !== 'id'">
                <strong>{{ key }}:</strong> {{ value }}
              </template>
            </span>
          </button>
        </label>

        <div v-if="paginatedRows.length === 0" class="empty-state">No matching records found.</div>
      </div>

      <!-- BOTTOM: Pagination -->
      <footer class="pagination">
        <button @click="currentPage--" :disabled="currentPage === 1">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages || 1 }}</span>
        <button @click="currentPage++" :disabled="currentPage === totalPages || totalPages === 0">
          Next
        </button>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  // Array of data objects. Must contain an 'id' property.
  rows: {
    type: Array,
    required: true,
  },
  // Format: [['attributeName', 'Display Name', 'initialFilterValue'], ...]
  filtersConfig: {
    type: Array,
    required: true,
  },
  // Format: [{ id: 'delete', name: 'Delete Selected' }, ...]
  groupActions: {
    type: Array,
    default: () => [],
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
})

const emit = defineEmits(['view-details', 'execute-action'])

// State
const localFilters = ref([...props.filtersConfig])
const currentPage = ref(1)
const isSelectionMode = ref(false)
const currentAction = ref(null)
const selectedRowIds = ref([]) // Preserves selections across pages

// Methods for Action Handling
const enterSelectionMode = (action) => {
  isSelectionMode.value = true
  currentAction.value = action
  selectedRowIds.value = []
}

const cancelOperation = () => {
  isSelectionMode.value = false
  currentAction.value = null
  selectedRowIds.value = []
}

const confirmOperation = () => {
  // Emit the action identifier alongside the array of selected IDs
  emit('execute-action', {
    action: currentAction.value,
    selectedIds: Array.from(selectedRowIds.value),
  })
  cancelOperation() // Reset UI after execution
}

const resetPagination = () => {
  currentPage.value = 1
}

// Computed Data Pipeline
const filteredRows = computed(() => {
  return props.rows.filter((row) => {
    // Check against every filter element
    return localFilters.value.every((filter) => {
      const [attrName, , filterValue] = filter
      if (!filterValue) return true // Skip empty filters

      const rowValue = String(row[attrName]).toLowerCase()
      const search = String(filterValue).toLowerCase()
      return rowValue.includes(search)
    })
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredRows.value.length / props.itemsPerPage)
})

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage
  const end = start + props.itemsPerPage
  return filteredRows.value.slice(start, end)
})

// Sync internal filters if parent updates them manually
watch(
  () => props.filtersConfig,
  (newConfig) => {
    localFilters.value = [...newConfig]
  },
  { deep: true },
)
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

.container {
  border: 1px solid var(--border-color);
  padding: 20px;
  width: 100%;
  max-width: 400px;
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

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.data-view-wrapper {
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

/* Sidebar */
.sidebar {
  width: 250px;
  padding: 1.5rem;
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.filter-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-item label {
  display: block;
  font-size: 0.85rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
}

.filter-item input {
  width: 100%;
  padding: 0.4rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.filter-item input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Main Content Area */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Header / Actions */
.action-menu {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  min-height: 60px;
  align-items: center;
}

.standard-actions,
.selection-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  font-weight: bold;
}

button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Row List */
.row-list {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.row-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
}

.row-item.selection-mode {
  /* Give visual feedback that the whole row can be clicked to toggle checkbox */
  cursor: pointer;
}

.row-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: var(--text-color);
}

.row-btn {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  text-align: left;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.row-btn:hover:not(:disabled) {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.row-data {
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  font-style: italic;
  opacity: 0.7;
}

/* Pagination */
.pagination {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .data-view-wrapper {
    flex-direction: column;
    height: 100vh;
  }
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>
