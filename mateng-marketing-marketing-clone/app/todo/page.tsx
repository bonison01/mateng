'use client';

import React, { useState, useEffect } from 'react';
import { fetchTasksFromGoogleSheets, addTaskToGoogleSheets, toggleTaskCompletionInGoogleSheets, deleteTaskFromGoogleSheets } from '@/lib/googleSheetsAPI';
import styles from './todo.module.css'; // Import the CSS module

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    const tasks = await fetchTasksFromGoogleSheets();
    setTodos(tasks);
  };

  const addTask = async () => {
    if (newTask.trim() === '') return;
    await addTaskToGoogleSheets(newTask);
    setNewTask('');
    fetchTasks(); // Refresh tasks after adding
  };

  const toggleTask = async (id: number) => {
    await toggleTaskCompletionInGoogleSheets(id);
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    await deleteTaskFromGoogleSheets(id);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className={styles.inputWrapper}>
        <input
          className={styles.inputField}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          className={styles.addButton}
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <ul className={styles.taskList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={styles.taskItem}
          >
            <div className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTask(todo.id)}
              />
              <span className={todo.completed ? styles.completed : styles.taskText}>
                {todo.task}
              </span>
            </div>
            <button
              className={styles.deleteButton}
              onClick={() => deleteTask(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
