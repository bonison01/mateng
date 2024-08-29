const scriptURL = 'https://script.google.com/macros/s/AKfycbzSLsqya9hU87i5LJFHDVI8m41N4_qmW8QimxRnolk51UAJO4ofeGyyBEv6UTIHWlF92A/exec';

export const fetchTasksFromGoogleSheets = async () => {
  try {
    const response = await fetch(`${scriptURL}?action=getTasks`);
    const data = await response.json();
    console.log("Fetched tasks:", data);
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

export const addTaskToGoogleSheets = async (task: string) => {
  try {
    const response = await fetch(`${scriptURL}?action=addTask&task=${encodeURIComponent(task)}`);
    const data = await response.json();
    console.log("Task added:", data);
    return data;
  } catch (error) {
    console.error('Error adding task:', error);
  }
};

export const toggleTaskCompletionInGoogleSheets = async (id: number) => {
  try {
    const response = await fetch(`${scriptURL}?action=toggleTask&id=${id}`);
    const data = await response.json();
    console.log("Toggled task:", data);
    return data;
  } catch (error) {
    console.error('Error toggling task:', error);
  }
};

export const deleteTaskFromGoogleSheets = async (id: number) => {
  try {
    const response = await fetch(`${scriptURL}?action=deleteTask&id=${id}`);
    const data = await response.json();
    console.log("Deleted task:", data);
    return data;
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};
