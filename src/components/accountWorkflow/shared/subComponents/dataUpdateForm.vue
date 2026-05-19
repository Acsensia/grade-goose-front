<template>
  <div class="container">
    <div class="header">
      <div class="header-titles">
        <span class="entity-subtitle">Managing {{ entityName }}</span>
        <h2>Update {{ fieldConfig.label }}</h2>
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <!-- Error Message Banner -->
      <div v-if="errorMessage" class="error-banner">
        {{ errorMessage }}
      </div>

      <!-- Dynamically Rendered Inputs (Current, New, Confirm) -->
      <div v-for="field in activeFormFields" :key="field.id" class="form-group">
        <label :for="field.id">
          {{ field.displayLabel }} <span class="required-indicator">*</span>
        </label>

        <!-- BOOLEAN TYPE (Checkbox) -->
        <div v-if="fieldConfig.type === 'boolean'" class="checkbox-wrapper">
          <input
            type="checkbox"
            :id="field.id"
            v-model="formData[field.modelKey]"
            class="checkbox-input"
          />
          <span class="checkbox-label">{{ formData[field.modelKey] ? 'True' : 'False' }}</span>
        </div>

        <!-- BIG TEXT TYPE (Textarea) -->
        <textarea
          v-else-if="fieldConfig.type === 'big-text'"
          :id="field.id"
          v-model="formData[field.modelKey]"
          :maxlength="fieldConfig.maxLength"
          class="large-text-input"
          required
        ></textarea>

        <!-- STANDARD HTML INPUTS (String, Email, Password, Number, Date) -->
        <input
          v-else
          :type="getHtmlInputType(fieldConfig.type)"
          :id="field.id"
          v-model="formData[field.modelKey]"
          :maxlength="fieldConfig.maxLength"
          :min="fieldConfig.min"
          :max="fieldConfig.max"
          required
        />
      </div>

      <div class="actions">
        <button type="button" class="btn-back" @click="$emit('back')">Back</button>
        <button type="submit" class="btn-submit">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  // e.g., 'User', 'Student', 'Settings'
  entityName: {
    type: String,
    default: 'Record',
  },
  // Configuration object for the specific field being updated
  fieldConfig: {
    type: Object,
    required: true,
    /* Example Structure:
    {
      name: 'password_hash',
      label: 'Password',
      type: 'password', // 'string' | 'number' | 'boolean' | 'date' | 'big-text' | 'email' | 'password'
      requireCurrent: true,
      requireConfirm: true,
      maxLength: 255,
      // For numbers: min: 1, max: 100
      // For dates: min: '2023-01-01', max: '2025-12-31'
    }
    */
  },
})

const emit = defineEmits(['back', 'submit-update'])

const errorMessage = ref('')

// Reactive object holding the state of the form inputs
const formData = ref({
  current: '',
  newValue: '',
  confirm: '',
})

// Initialize the form data with correct types
const initializeForm = () => {
  errorMessage.value = ''
  const isBool = props.fieldConfig.type === 'boolean'
  formData.value = {
    current: isBool ? false : '',
    newValue: isBool ? false : '',
    confirm: isBool ? false : '',
  }
}

onMounted(() => initializeForm())

// Reset the form if the parent changes the field config dynamically
watch(
  () => props.fieldConfig,
  () => {
    initializeForm()
  },
  { deep: true },
)

// Dynamically construct which fields need to be shown based on requirements
const activeFormFields = computed(() => {
  const fields = []

  if (props.fieldConfig.requireCurrent) {
    fields.push({
      id: `current-${props.fieldConfig.name}`,
      displayLabel: `Current ${props.fieldConfig.label}`,
      modelKey: 'current',
    })
  }

  fields.push({
    id: `new-${props.fieldConfig.name}`,
    displayLabel: props.fieldConfig.requireCurrent
      ? `New ${props.fieldConfig.label}`
      : props.fieldConfig.label,
    modelKey: 'newValue',
  })

  if (props.fieldConfig.requireConfirm) {
    fields.push({
      id: `confirm-${props.fieldConfig.name}`,
      displayLabel: `Confirm New ${props.fieldConfig.label}`,
      modelKey: 'confirm',
    })
  }

  return fields
})

// Maps custom types to native HTML input types
const getHtmlInputType = (type) => {
  const map = {
    string: 'text',
    email: 'email',
    password: 'password',
    number: 'number',
    date: 'date',
  }
  return map[type] || 'text'
}

const handleSubmit = () => {
  errorMessage.value = ''

  // 1. Check if Confirm Value matches New Value (if confirmation is required)
  if (props.fieldConfig.requireConfirm && formData.value.newValue !== formData.value.confirm) {
    errorMessage.value = 'The new values do not match. Please try again.'
    return
  }

  // 2. Prepare payload. Only send what is relevant.
  const payload = {
    fieldName: props.fieldConfig.name,
    newValue: formData.value.newValue,
  }

  // Include current value if it was required (e.g., verifying current password on backend)
  if (props.fieldConfig.requireCurrent) {
    payload.currentValue = formData.value.current
  }

  // 3. Emit event to parent
  emit('submit-update', payload)
}
</script>

<style scoped>
/* Core Container */
.container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

/* Header Styling */
.header {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
}

.header-titles {
  display: flex;
  flex-direction: column;
}

.entity-subtitle {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
  margin-bottom: 0.25rem;
}

.header h2 {
  margin: 0;
  font-size: 1.5rem;
}

/* Validation Error Banner */
.error-banner {
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border: 1px solid var(--border-color);
  background-color: var(--text-color);
  color: var(--bg-color);
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
}

/* Form Groups */
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 0.95rem;
}

.required-indicator {
  font-weight: normal;
  margin-left: 0.2rem;
}

/* Native Inputs */
input[type='text'],
input[type='email'],
input[type='password'],
input[type='number'],
input[type='date'],
textarea {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  font-family: inherit;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: 2px solid var(--text-color);
  outline-offset: -2px;
}

/* Large Text Area constraints */
.large-text-input {
  max-width: 100%;
  height: 120px;
  max-height: 400px;
  overflow-y: auto;
  resize: vertical;
}

/* Checkbox specific styling */
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.25rem 0;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
  accent-color: var(--text-color);
}

.checkbox-label {
  font-size: 1rem;
  user-select: none;
}

/* Actions Menu */
.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

button {
  background-color: var(--bg-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
}

button:hover {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.btn-submit {
  font-weight: bold;
}
</style>
