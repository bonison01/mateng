'use client';

import React, { useEffect, useState } from 'react';
import {
  fetchTasksFromGoogleSheets,
  addTaskToGoogleSheets,
  toggleTaskCompletionInGoogleSheets,
  deleteTaskFromGoogleSheets,
} from '../lib/googleSheetsAPI';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from Google Sheets
  const fetchTasks = async () => {
    const tasks = await fetchTasksFromGoogleSheets();
    setTodos(tasks);
  };

  // Add a new task
  const addTask = async () => {
    if (newTask.trim() === '') return;
    await addTaskToGoogleSheets(newTask);
    setNewTask('');
    fetchTasks(); // Refresh tasks
  };

  // Toggle task completion
  const toggleTask = async (id: number) => {
    await toggleTaskCompletionInGoogleSheets(id);
    fetchTasks(); // Refresh tasks
  };

  // Delete task
  const deleteTask = async (id: number) => {
    await deleteTaskFromGoogleSheets(id);
    fetchTasks(); // Refresh tasks
  };

  useEffect(() => {
    fetchTasks(); // Fetch tasks on component mount
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="mb-4">
        <input
          className="border border-gray-300 p-2 rounded w-full"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          className="bg-primary text-primary-foreground px-4 py-2 mt-2 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center mb-2 p-2 border border-muted rounded"
            style={{ fontSize: '18px' }}
          >
            <div className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTask(todo.id)}
              />
              <span
                className={`${
                  todo.completed ? 'line-through text-muted' : 'text-foreground'
                }`}
              >
                {todo.task}
              </span>
            </div>
            <button
              className="text-red-500"
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
