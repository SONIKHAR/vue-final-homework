<template>
  <v-container>
    <task-modal
      v-if="isTaskModalOpen"
      :isOpen="isTaskModalOpen"
      :editingTask="editingTask"
      @close="toggleTaskModal"
      @taskSave="onTaskSave"
      @taskAdd="onTaskAdd"
    />

    <confirm-dialog
    :isOpen="isDeleteDialogOpen"
    title="Attention!"
    :text="confirmDialogText"
    @close="toggleDeleteDialog"
    @confirm="onSelectedTasksDelete"
  />

    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn color="info" @click="toggleTaskModal">Add new task</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- <task v-memo="[tasks[0], isTaskModalOpen]" :data="tasks[0]" /> -->
  <!-- <task v-once :data="tasks[1]" @taskEdit="onTaskEdit(taskData)" /> -->

  <v-container>
    <v-row>
      <v-col v-for="taskData in tasks" :key="taskData._id" cols="12" xs="12" sm="6" md="4" lg="3">
        <task
          :data="taskData"
          :isSelected="selectedTasks.has(taskData._id)"
          @taskEdit="onTaskEdit(taskData)"
          @taskDelete="onTaskDelete(taskData._id)"
          @taskSelect="toggleTaskId(taskData._id)"
          @statusChange="onStatusChange"
        />
      </v-col>
    </v-row>
  </v-container>

  <v-btn
  :disabled="isDeleteSelectedBtnDisabled"
  class="delete-selected-btn"
  color="error"
  variant="elevated"
  @click="toggleDeleteDialog"
>
  <v-icon icon="mdi-delete-outline" /> Delete selected
</v-btn>


</template>


<script src="./todoList.js"></script>

<style scoped>
.delete-selected-btn {
  position: fixed;
  right: -156px;
  bottom: 40px;
}
.delete-selected-btn:hover {
  animation-name: btn-animation;
  animation-duration: 0.8s;
  right: 20px;
}
@keyframes btn-animation {
  from {
    right: -156px;
  }
  to {
    right: 20px;
  }
}
</style>