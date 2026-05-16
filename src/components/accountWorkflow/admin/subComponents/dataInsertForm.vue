<template>
  <div class="container">
    <div class="header">
      <!-- Clearly states what entity is being added -->
      <h2>Add New {{ entityName }}</h2>
    </div>

    <form @submit.prevent="handleSubmit">
      <div v-for="field in fields" :key="field.name" class="form-group">
        <label :for="field.name">
          {{ field.label }} <span v-if="field.required" class="required-indicator">*</span>
        </label>

        <!-- BOOLEAN TYPE (Checkbox) -->
        <div v-if="field.type === 'boolean'" class="checkbox-wrapper">
          <input
            type="checkbox"
            :id="field.name"
            v-model="formData[field.name]"
            class="checkbox-input"
          />
          <span class="checkbox-label">{{ formData[field.name] ? 'True' : 'False' }}</span>
        </div>

        <!-- NUMBER TYPE -->
        <input
          v-else-if="field.type === 'number'"
          type="number"
          :id="field.name"
          v-model="formData[field.name]"
          :required="field.required"
        />

        <!-- DATE TYPE -->
        <input
          v-else-if="field.type === 'date'"
          type="date"
          :id="field.name"
          v-model="formData[field.name]"
          :required="field.required"
        />

        <!-- EMAIL TYPE (Includes native email validation) -->
        <input
          v-else-if="field.type === 'email'"
          type="email"
          :id="field.name"
          v-model="formData[field.name]"
          :required="field.required"
          :maxlength="field.maxLength"
        />

        <!-- DEFAULT / STRING TYPE -->
        <input
          v-else
          type="text"
          :id="field.name"
          v-model="formData[field.name]"
          :required="field.required"
          :maxlength="field.maxLength"
        />
      </div>

      <div class="actions">
        <button type="button" class="btn-back" @click="$emit('back')">Back</button>
        <button type="submit" class="btn-submit">Add {{ entityName }}</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  // Name of the table/entity (e.g., 'Student', 'Course')
  entityName: {
    type: String,
    default: 'Record',
  },
  // Configuration array for the form inputs
  fields: {
    type: Array,
    required: true,
    /* Example structure:
    [
      { name: 'username', label: 'Username', type: 'text', required: true, maxLength: 50 },
      { name: 'email', label: 'Email Address', type: 'email', required: true, maxLength: 255 },
      { name: 'age', label: 'Age', type: 'number', required: false },
      { name: 'enrollment_date', label: 'Enrollment Date', type: 'date', required: true },
      { name: 'is_active', label: 'Active Status', type: 'boolean', required: false }
    ]
    */
  },
})

const emit = defineEmits(['back', 'submit-data'])

// Reactive object to hold the form payload
const formData = ref({})

// Initialize the form data structure based on the provided fields
const initializeForm = () => {
  const initialData = {}
  props.fields.forEach((field) => {
    // Booleans default to false, everything else defaults to an empty string
    initialData[field.name] = field.type === 'boolean' ? false : ''
  })
  formData.value = initialData
}

onMounted(() => {
  initializeForm()
})

// Re-initialize if the fields config changes dynamically
watch(
  () => props.fields,
  () => {
    initializeForm()
  },
  { deep: true },
)

const handleSubmit = () => {
  // HTML5 handles the basic validation (required, email format, maxlength).
  // If the code reaches here, the form is valid.

  // Clone the data to prevent unintended mutations by the parent
  const payload = JSON.parse(JSON.stringify(formData.value))

  emit('submit-data', payload)

  // Optional: Reset form after successful submission
  // initializeForm()
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

.container {
  /* Using standard width max but allowing expansion for larger forms if needed */
  max-width: 500px;
}

.header h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: bold;
  font-size: 0.9rem;
}

.required-indicator {
  /* Inherits text color so it stays black/white, but differentiates slightly */
  font-weight: normal;
  margin-left: 0.2rem;
}

input[type='text'],
input[type='email'],
input[type='number'],
input[type='date'] {
  width: 100%;
  padding: 0.6rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  font-family: inherit;
}

input:focus {
  outline: 2px solid var(--text-color);
  outline-offset: -2px;
}

/* Specific styling for the boolean checkbox to match the minimalist theme */
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.checkbox-input {
  width: 18px;
  height: 18px;
  margin: 0;
  cursor: pointer;
  accent-color: var(--text-color); /* Makes the checkbox tick match the theme */
}

.checkbox-label {
  font-size: 0.9rem;
  user-select: none;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.btn-submit {
  font-weight: bold;
}
</style>
